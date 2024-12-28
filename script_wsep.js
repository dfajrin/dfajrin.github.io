// script.js
let myChartInstance;
let forecastData;
let displayedSolarDataIndex = 0;
let displayedWindDataIndex = 0;
const numRows = 6;

async function getForecast() {
    const locationInput = document.getElementById("location").value;
    const mainContent = document.getElementById("mainContent");
    const errorMessage = document.getElementById("error-message");
    const loadingIndicator = document.getElementById("loading");

    errorMessage.textContent = "";
    mainContent.style.display = "none";
    loadingIndicator.style.display = "block";

    try {
        const { latitude, longitude } = await geocodeLocation(locationInput);
        const forecastData = await fetchForecast(latitude, longitude);
        displayForecast(forecastData);
        mainContent.style.display = "flex";
    } catch (error) {
        console.error("Error:", error);
        errorMessage.textContent = error.message;
    } finally {
        loadingIndicator.style.display = "none";
    }
}

async function geocodeLocation(locationInput) {
    try {
        if (locationInput.includes(",")) {
            const [latitude, longitude] = locationInput.split(",").map(Number);
            if (isNaN(latitude) || isNaN(longitude) || latitude < -90 || latitude > 90 || longitude < -180 || longitude > 180) {
                throw new Error("Invalid coordinates. Latitude must be between -90 and 90, and longitude between -180 and 180.");
            }
            return { latitude, longitude };
        } else {
            const geocodingResponse = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${locationInput}&count=1&format=json`);
            if (!geocodingResponse.ok) {
                throw new Error(`Geocoding API error: ${geocodingResponse.status} ${geocodingResponse.statusText}`);
            }
            const geocodingData = await geocodingResponse.json();
            if (!geocodingData.results || geocodingData.results.length === 0) {
                throw new Error(`Location "${locationInput}" not found. Please be more specific or use coordinates.`);
            }
            return { latitude: geocodingData.results[0].latitude, longitude: geocodingData.results[0].longitude };
        }
    } catch (error) {
        console.error("Geocoding Error:", error);
        throw new Error(`Error finding location: ${error.message}`);
    }
}

async function fetchForecast(latitude, longitude) {
    try {
        const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,windspeed_10m,direct_radiation,diffuse_radiation&timezone=auto&forecast_days=3`;
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Forecast API error: ${response.status} ${response.statusText}`);
        }
        return await response.json();
    } catch (error) {
        console.error("Forecast Fetch Error:", error);
        throw new Error("Error fetching forecast data. Please check your network connection.");
    }
}

function displayForecast(data) {
    forecastData = data;
    const hourly = forecastData.hourly;
    const timestamps = hourly.time.map(timeStr => new Date(timeStr));
    const windSpeeds = hourly.windspeed_10m;
    const directRadiation = hourly.direct_radiation;
    const diffuseRadiation = hourly.diffuse_radiation;

    const solarPower = directRadiation.map((d, i) => Math.max(0, d + diffuseRadiation[i]));
    const windPower = windSpeeds.map(speed => 0.5 * 1.225 * Math.pow(Math.max(0, speed), 3));

    displayChart(timestamps, solarPower, windPower); // Display chart ONCE when data is fetched
    displayTables(); // Display tables initially
}

function displayDataSubset() {
    if (!forecastData || !forecastData.hourly || !forecastData.hourly.time || !forecastData.hourly.windspeed_10m || !forecastData.hourly.direct_radiation || !forecastData.hourly.diffuse_radiation) {
        console.error("Invalid forecast data:", forecastData);
        document.getElementById("error-message").textContent = "Invalid data received from the forecast API.";
        return;
    }
    displayTables();
}

function displayChart(timestamps, solarPower, windPower) {
    const chartCanvas = document.getElementById("myChart");
    const ctx = chartCanvas.getContext('2d');

    if (myChartInstance) {
        myChartInstance.destroy();
    }

    myChartInstance = new Chart(ctx, {
        type: 'line',
        data: {
            labels: timestamps,
            datasets: [
                { label: 'Solar Power (W/m²)', data: solarPower, borderColor: 'orange', fill: false, yAxisID: 'power' },
                { label: 'Wind Power (W/m²)', data: windPower, borderColor: 'blue', fill: false, yAxisID: 'power' }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: {
                    type: 'time',
                    time: {
                        unit: 'hour',
                        displayFormats: { hour: 'MMM dd, h a' }
                    },
                    adapter: 'date-fns'
                },
                power: {
                    beginAtZero: true,
                    title: { display: true, text: 'Power (W/m²)' }
                }
            },
            plugins: {
                tooltip: {
                    callbacks: { title: (context) => context[0].label }
                }
            }
        }
    });
}

function displayTables() {
    if (!forecastData || !forecastData.hourly || !forecastData.hourly.time || !forecastData.hourly.windspeed_10m || !forecastData.hourly.direct_radiation || !forecastData.hourly.diffuse_radiation) {
        console.error("Invalid forecast data:", forecastData);
        document.getElementById("error-message").textContent = "Invalid data received from the forecast API.";
        return;
    }
    const hourly = forecastData.hourly;
    const timestamps = hourly.time.map(timeStr => new Date(timeStr));
    const windSpeeds = hourly.windspeed_10m;
    const directRadiation = hourly.direct_radiation;
    const diffuseRadiation = hourly.diffuse_radiation;

    const solarPower = directRadiation.map((d, i) => Math.max(0, d + diffuseRadiation[i]));
    const windPower = windSpeeds.map(speed => 0.5 * 1.225 * Math.pow(Math.max(0, speed), 3));
    displaySingleTable(timestamps, solarPower, "solarTable", "Solar", displayedSolarDataIndex, "solar-data-dropdown");
    displaySingleTable(timestamps, windPower, "windTable", "Wind", displayedWindDataIndex, "wind-data-dropdown");
}

function displaySingleTable(timestamps, powerData, tableId, tableName, displayedIndex, dropdownId) {
    const startIndex = displayedIndex;
    const endIndex = Math.min(startIndex + numRows, timestamps.length);
    const table = document.getElementById(tableId);

    let tableHTML = `<table><thead><tr><th>Time</th><th>${tableName} Power (W/m²)</th></tr></thead><tbody>`;

    if (endIndex > startIndex) {
        for (let i = startIndex; i < endIndex; i++) {
            const formattedTime = timestamps[i].toLocaleString();
            tableHTML += `<tr><td>${formattedTime}</td><td>${powerData[i].toFixed(2)}</td></tr>`;
        }
    } else {
        tableHTML += "<tr><td colspan='2'>No data to display for this time range.</td></tr>";
    }

    tableHTML += "</tbody></table>";
    table.innerHTML = `<h3>${tableName}</h3>` + tableHTML;

    let dropdown = document.getElementById(dropdownId);
    if (!dropdown) {
        dropdown = document.createElement("select");
        dropdown.id = dropdownId;
        const tableContainer = document.getElementById(tableId + "Container");
        tableContainer.insertBefore(dropdown, tableContainer.firstChild);
    }

    dropdown.innerHTML = "";
    dropdown.removeEventListener("change", handleDropdownChange);

    const numPages = Math.ceil(timestamps.length / numRows);
    if (numPages > 1) {
        for (let i = 0; i < numPages; i++) {
            const option = document.createElement("option");
            option.value = i;
            option.text = `Hours ${i * numRows + 1} - ${Math.min((i + 1) * numRows, timestamps.length)}`;
            dropdown.appendChild(option);
        }
        dropdown.value = displayedIndex / numRows;
        dropdown.style.display = 'block';
    } else {
        dropdown.style.display = 'none';
    }
    dropdown.addEventListener("change", (event) => handleDropdownChange(event, dropdownId));
}

function handleDropdownChange(event, dropdownId) {
    if (dropdownId === "solar-data-dropdown") {
        displayedSolarDataIndex = parseInt(event.target.value, 10) * numRows;
    } else if (dropdownId === "wind-data-dropdown") {
        displayedWindDataIndex = parseInt(event.target.value, 10) * numRows;
    }
    displayDataSubset();
}

document.addEventListener('DOMContentLoaded', (event) => {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    const currentTheme = localStorage.getItem('theme');

    if (currentTheme) {
        body.classList.add(currentTheme);
    }

    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark-mode');
        } else {
            localStorage.setItem('theme', '');
        }
    });
});