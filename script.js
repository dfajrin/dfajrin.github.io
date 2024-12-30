// Revised script.js
let myChartInstance;
let forecastData;
let displayedSolarDataIndex = 0;
let displayedWindDataIndex = 0;
const numRows = 6;

document.addEventListener('DOMContentLoaded', () => {
    // Theme Toggle Initialization
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    const currentTheme = localStorage.getItem('theme');

    if (currentTheme) {
        body.classList.add(currentTheme);
    }

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            body.classList.toggle('dark-mode');
            localStorage.setItem('theme', body.classList.contains('dark-mode') ? 'dark-mode' : '');
        });
    } else {
        console.error("Theme toggle element not found.");
    }

    // Checkbox Change Event
    const mainContent = document.getElementById("mainContent");
    if (mainContent) {
        mainContent.addEventListener("change", function(event) {
            if (event.target.id === "solar-checkbox" || event.target.id === "wind-checkbox") {
                if (forecastData && forecastData.hourly) {
                    displayForecast(forecastData);
                } else {
                    console.warn("No forecast data available to update the charts.");
                }
            }
        });
    } else {
        console.error("Main content element not found.");
    }
});

async function getForecast() {
    const locationElement = document.getElementById("location");
    const dateElement = document.getElementById("date");
    const forecastDaysElement = document.getElementById("forecast-days");

    if (!locationElement || !dateElement || !forecastDaysElement) {
        console.error("Required input elements not found.");
        return;
    }

    const locationInput = locationElement.value;
    const dateInput = dateElement.value;
    const forecastDays = parseInt(forecastDaysElement.value, 10);

    const mainContent = document.getElementById("mainContent");
    const errorMessage = document.getElementById("error-message");
    const loadingIndicator = document.getElementById("loading");

    if (!mainContent || !errorMessage || !loadingIndicator) {
        console.error("Required UI elements not found.");
        return;
    }

    errorMessage.textContent = "";
    mainContent.style.display = "none";
    loadingIndicator.style.display = "block";

    try {
        const { latitude, longitude } = await geocodeLocation(locationInput);

        if (dateInput) {
            const selectedDate = new Date(dateInput);
            const today = new Date();
            const selectedDateString = selectedDate.toISOString().split('T')[0];
            const todayString = today.toISOString().split('T')[0];
            
            if (selectedDateString < todayString) {
                forecastData = await fetchHistoricalForecast(latitude, longitude, selectedDate, forecastDays);
            } else {
                forecastData = await fetchForecast(latitude, longitude, forecastDays);
            }
        } else {
            forecastData = await fetchForecast(latitude, longitude, forecastDays);
        }

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

async function fetchForecast(latitude, longitude, forecastDays) { // Add forecastDays parameter
    try {
        const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,windspeed_10m,direct_radiation,diffuse_radiation&timezone=auto&forecast_days=${forecastDays}`; // Use forecastDays variable (automatically converted to string)
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

async function fetchHistoricalForecast(latitude, longitude, startDate, forecastDays) {
    try {
      const startDateString = startDate.toISOString().split('T')[0];
      const startDateObj = new Date(startDateString);
  
      // Calculate endDate based on forecastDays
      const endDateObj = new Date(startDateObj);
      endDateObj.setDate(startDateObj.getDate() + forecastDays - 1); // Corrected calculation
      const endDateString = endDateObj.toISOString().slice(0, 10);
  
      const url = `https://historical-forecast-api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,windspeed_10m,direct_radiation,diffuse_radiation&timezone=auto&start_date=${startDateString}&end_date=${endDateString}`; // Historical forecast endpoint
  
      const response = await fetch(url);
  
      if (!response.ok) {
        throw new Error(`Historical Forecast API error: ${response.status} ${response.statusText}`);
      }
      return await response.json();
    } catch (error) {
      console.error("Historical Forecast Fetch Error:", error);
      throw new Error("Error fetching historical forecast data. Please check your network connection and date selection.");
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

    displayChart(timestamps, solarPower, windPower); // Jetzt wird die Chart-Instanz korrekt aktualisiert oder erstellt
    displayTables();
    displayDailyBarChart(data);
}

function displayChart(timestamps, solarPower, windPower) {
    const chartCanvas = document.getElementById("myChart");
    if (!chartCanvas) {
        console.error("Chart canvas not found.");
        return;
    }

    const ctx = chartCanvas.getContext('2d');
    const showSolar = document.getElementById("solar-checkbox")?.checked;
    const showWind = document.getElementById("wind-checkbox")?.checked;

    const datasets = [];

    if (showSolar) {
        datasets.push({ label: 'Solar Power (W/m²)', data: solarPower, borderColor: 'orange', fill: false, yAxisID: 'power' });
    }
    if (showWind) {
        datasets.push({ label: 'Wind Power (W/m²)', data: windPower, borderColor: 'blue', fill: false, yAxisID: 'power' });
    }

    if (myChartInstance) {
        myChartInstance.data.labels = timestamps;
        myChartInstance.data.datasets = datasets;
        myChartInstance.update();
    } else {
        myChartInstance = new Chart(ctx, {
            type: 'line',
            data: {
                labels: timestamps,
                datasets: datasets
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
}

function displayDailyBarChart(forecastData) {
    const showSolar = document.getElementById("solar-checkbox")?.checked;
    const showWind = document.getElementById("wind-checkbox")?.checked;
    const chartContainer = document.getElementById('daily-bar-chart-container');

    if (!chartContainer) {
        console.error("Daily bar chart container not found.");
        return;
    }

    // Clear existing chart if it exists
    let canvas = chartContainer.querySelector('canvas');
    if (canvas) {
        chartContainer.removeChild(canvas);
    }

    if (!forecastData || !forecastData.hourly || !forecastData.hourly.time || !forecastData.hourly.windspeed_10m || !forecastData.hourly.direct_radiation || !forecastData.hourly.diffuse_radiation) {
        console.error("Invalid forecast data for bar chart:", forecastData);
        const errorMessage = document.createElement('p');
        errorMessage.textContent = "No data available to display the bar chart.";
        chartContainer.appendChild(errorMessage);
        return;
    }

    const hourly = forecastData.hourly;
    const timestamps = hourly.time.map(timeStr => new Date(timeStr));
    const windSpeeds = hourly.windspeed_10m;
    const directRadiation = hourly.direct_radiation;
    const diffuseRadiation = hourly.diffuse_radiation;

    const solarPower = directRadiation.map((d, i) => Math.max(0, d + diffuseRadiation[i]));
    const windPower = windSpeeds.map(speed => 0.5 * 1.225 * Math.pow(Math.max(0, speed), 3));

    const dailyData = {};

    for (let i = 0; i < timestamps.length; i++) {
        const date = timestamps[i].toISOString().split('T')[0];
        if (!dailyData[date]) {
            dailyData[date] = { solar: 0, wind: 0 };
        }
        dailyData[date].solar += solarPower[i];
        dailyData[date].wind += windPower[i];
    }

    const dailyLabels = Object.keys(dailyData);
    const datasets = [];

    if (showSolar) {
        const dailySolar = dailyLabels.map(date => dailyData[date].solar);
        datasets.push({
            label: 'Daily Solar Energy (Wh/m²)',
            data: dailySolar,
            backgroundColor: 'orange',
        });
    }

    if (showWind) {
        const dailyWind = dailyLabels.map(date => dailyData[date].wind);
        datasets.push({
            label: 'Daily Wind Energy (Wh/m²)',
            data: dailyWind,
            backgroundColor: 'blue',
        });
    }

    // clear existing warning messages
    const existingMessages = chartContainer.querySelectorAll('p');
    existingMessages.forEach(message => {
        if (message.textContent.includes("No energy data selected for display.")) {
            chartContainer.removeChild(message);
        }
    });

    const barChartCanvas = document.createElement('canvas');
    barChartCanvas.id = 'dailyBarChart';
    chartContainer.appendChild(barChartCanvas);

    new Chart(barChartCanvas, {
        type: 'bar',
        data: {
            labels: dailyLabels,
            datasets: datasets,
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: {
                    grid: {
                        display: false
                    },
                    ticks: {
                        autoSkip: false,
                        maxRotation: 45,
                        minRotation: 0
                    }
                },
                y: {
                    beginAtZero: true,
                    title: { display: true, text: 'Energy (Wh/m²)' }
                }
            },
            plugins: {
                title: {
                    display: true,
                    text: 'Daily Accumulated Energy'
                }
            }
        }
    });
}

function displayDataSubset() {
    if (!forecastData || !forecastData.hourly || !forecastData.hourly.time || !forecastData.hourly.windspeed_10m || !forecastData.hourly.direct_radiation || !forecastData.hourly.diffuse_radiation) {
        console.error("Invalid forecast data:", forecastData);
        document.getElementById("error-message").textContent = "Invalid data received from the forecast API.";
        return;
    }
    displayTables();
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