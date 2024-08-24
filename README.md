<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CV Fajrin</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>

    <header>
        <h1>DIDA FAJRIN</h1>
    </header>

    <button class="theme-switch" id="theme-switch">Switch Theme</button>

    <div class="container">
        <div class="main-info">
            <div class="signature">
                <svg viewBox="0 0 100 50" xmlns="http://www.w3.org/2000/svg">
                    <text x="10" y="35" font-family="'Dancing Script', cursive" font-size="30" fill="#ff4081">Dida</text>
                </svg>
            </div>
            <div class="details">
                <h2>Contact Information</h2>
                <p><strong>Email:</strong> didafajrin@gmail.com</p>
                <p><strong>Phone:</strong> 01590 6358965</p>
                <p><strong>LinkedIn:</strong> <a href="https://linkedin.com/in/yourprofile" target="_blank">linkedin.com/in/yourprofile</a></p>
                <p><strong>GitHub:</strong> <a href="https://github.com/dfajrin" target="_blank">dfajrin.github.io/</a></p>
            </div>
        </div>

	<!-- Weather Information Section -->
        <div class="section" id="weather-section">
            <h3>Weather and Local Time in Hamburg</h3>
            <p id="weather-info">Loading weather information...</p>
            <p id="time-info">Loading local time...</p>
        </div>

        <div class="section">
            <h3>About Me</h3>
            <p>Passionate Data Scientist with a Bachelor's in Meteorology. Equipped with strong analytical and communication skills, I excel in high-precision data analysis. I have completed online courses in Python for Data Science and The Business Intelligence Analyst on Udemy and visited the Master program in Integrated Climate System Science at the University of Hamburg. Experienced in developing machine learning models for weather forecasting and wind energy potential, I am committed to leveraging data-driven insights to tackle complex challenges.</p>
        </div>

        <div class="section">
            <h3>Skills</h3>
            <ul>
                <li>HTML, CSS, JavaScript</li>
                <li>Python, Flask, Django</li>
                <li>Git, GitHub</li>
                <li>Responsive Design</li>
            </ul>
        </div>

        <div class="section">
            <h3>Experience</h3>
            <ul>
                <li><strong>Web Developer at XYZ Company</strong> (Jan 2020 - Present)
                    <br>- Developed and maintained company website.
                    <br>- Collaborated with designers and other developers.
                    <br>- Improved website performance and accessibility.
                </li>
                <li><strong>Intern at ABC Startup</strong> (Jun 2019 - Dec 2019)
                    <br>- Assisted in the development of a customer-facing web application.
                    <br>- Worked on front-end features using HTML, CSS, and JavaScript.
                </li>
            </ul>
        </div>

        <div class="section">
            <h3>Education</h3>
            <ul>
                <li><strong>Bachelor in Meteorology</strong>, Bandung Institute of Technology (2009 - 2014)</li>
                <li><strong>Student Exchange Program</strong> at Nagoya University (2013)</li>
                <li><strong>Integrated Climate System Science</strong>, University of Hamburg (2015 - 2018)</li>
            </ul>
        </div>

        <div class="section">
            <h3>Projects</h3>
            <ul>
                <li><strong>Portfolio Website</strong> - <a href="https://yourwebsite.com" target="_blank">yourwebsite.com</a>
                    <br>A responsive portfolio website showcasing my work and skills.
                </li>
                <li><strong>Task Manager App</strong> - <a href="https://github.com/yourusername/task-manager" target="_blank">GitHub Repository</a>
                    <br>A Python-based task management application with a user-friendly interface.
                </li>
            </ul>
        </div>

        <div class="section">
            <h3>Certifications</h3>
            <ul>
                <li><strong>Python für Data Science, Machine Learning and Visualization</strong>, Datamics GmbH (2013)</li>
                <li><strong>The Business Intelligence Analyst</strong>, 365 Careers (2013)</li>
            </ul>
        </div>
    </div>

    <footer>
        <p>&copy; 2024 Fajrin. All rights reserved.</p>
    </footer>

    <script>
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
                const apiKey = 'YOUR_OPENWEATHERMAP_API_KEY';
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
    </script>
