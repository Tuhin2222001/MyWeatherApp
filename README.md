🌤️ Weather App using React.js

This is a simple and responsive weather application built with React.js. It allows users to search for any city and get real-time weather updates including temperature, humidity, and wind speed using data from the OpenWeatherMap API. The app also dynamically updates weather icons based on the current weather condition.

Tools and Technologies Used

* React.js with Hooks (useState, useEffect, useRef)
* OpenWeatherMap API (for live weather data)
* Fetch API (for HTTP requests)
* Tailwind CSS (for styling and responsiveness)

Live Links

Live Demo: [https://tuhin2222001.github.io/MyWeatherApp/](https://tuhin2222001.github.io/MyWeatherApp/)
GitHub Repository: [https://github.com/Tuhin2222001/MyWeatherApp](https://github.com/Tuhin2222001/MyWeatherApp)

Features

* Search weather by entering a city name
* Displays:

  * Temperature (in Celsius)
  * Humidity (percentage)
  * Wind speed (in km/h)
* Automatically shows weather for Kolkata on first load
* Dynamic weather icons based on real-time data
* Error handling for invalid or empty input

React Hooks Used

useRef
Used to capture input from the user without triggering re-renders.

useState
Used to manage weather data, loading states, and error messages.

useEffect
Used to load default weather for Kolkata when the app starts.

File Structure (Main Files)

src/
├── assets/         (weather icons)
├── Weather.jsx     (main component logic)
├── Weather.css     (custom styles)
└── App.jsx         (root component)

How to Run This App Locally

1. Clone the repository
   git clone [https://github.com/Tuhin2222001/MyWeatherApp.git](https://github.com/Tuhin2222001/MyWeatherApp.git)
   cd MyWeatherApp

2. Install dependencies
   npm install

3. Create a .env file in the root directory and add your OpenWeatherMap API key
   VITE\_APP\_ID=your\_api\_key\_here

4. Start the development server
   npm run dev

API Used

OpenWeatherMap API – provides weather data for cities worldwide
Website: [https://openweathermap.org/api](https://openweathermap.org/api)

What I Learned

* How to fetch and display data from an external API
* How to use useRef for handling form input
* How state and conditional rendering work in React
* Basic styling with Tailwind CSS
* Structuring a simple React project

Future Improvements with MERN Stack

* Build a login system to save each user’s recent searches or favorite cities
* Store search history or preferred locations in a MongoDB database
* Create APIs using Node.js and Express to save and retrieve weather-related preferences
* Add reminders or weather alerts via backend logic
* Implement push notifications for severe weather updates
* Make the app mobile-first and more interactive with animations
* Add support for geolocation to detect and display weather automatically


