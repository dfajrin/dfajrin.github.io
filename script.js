// script.js

// theme switcher
const themeSwitch = document.getElementById('theme-switch');
        themeSwitch.addEventListener('click', () => {
            document.body.classList.toggle('dark-theme');
            themeSwitch.textContent = document.body.classList.contains('dark-theme') ? 'Light Theme' : 'Dark Theme';
        });

	// Weather and Local Time Information for Hamburg
        async function fetchWeather() {
            try {
                const city = 'Hamburg';
                const country = 'DE';

                // Fetch weather information from OpenWeatherMap
                const apiKey = '96808ec1cda9f5fa84e2cefcf232482d';
                const weatherResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=metric&appid=${apiKey}`);
                const weatherData = await weatherResponse.json();

                // Display weather information
                const weatherInfo = document.getElementById('weather-info');
                weatherInfo.textContent = `Current weather in ${city}, ${country}: ${weatherData.weather[0].description}, ${weatherData.main.temp}°C.`;

                // Display local time
                const timeInfo = document.getElementById('time-info');
                const localTime = new Intl.DateTimeFormat('en-GB', {
                    timeZone: 'Europe/Berlin',
                    hour: '2-digit',
                    minute: '2-digit',
                    second: '2-digit'
                }).format(new Date());
                timeInfo.textContent = `Local time in ${city}: ${localTime}`;
            } catch (error) {
                document.getElementById('weather-info').textContent = 'Unable to fetch weather information.';
                document.getElementById('time-info').textContent = 'Unable to fetch local time.';
            }
        }

        fetchWeather();
