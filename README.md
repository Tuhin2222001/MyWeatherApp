🌤️ Weather App using React.js

Git link : 
A sleek, beginner-friendly weather application built with **React** that fetches real-time weather data from the **OpenWeatherMap API**. The user can search any city and get details like temperature, humidity, and wind speed along with an appropriate weather icon.

🔧 Technologies Used: 

* ⚛️ React.js (with Hooks)
* 📡 Fetch API
* 🎯 useState, useEffect, useRef
* 🎨 CSS Flexbox
* 🌐 OpenWeatherMap API

🖼️ Demo

![Weather App Screenshot](./screenshot.png) 

🚀 Features

✅ Search weather by city name
✅ Displays temperature, humidity, and wind speed
✅ Dynamic weather icons based on API response
✅ Error handling (for blank/invalid cities)
✅ Loading indicator during data fetch
✅ Auto-fetch default weather for Kolkata on load

 🧠 React Hooks Overview

| Hook        | Purpose                                                 |
| ----------- | ------------------------------------------------------- |
| `useRef`    | Captures the input field value without re-rendering     |
| `useState`  | Stores weather data, errors, and loading status         |
| `useEffect` | Automatically fetches weather for default city on mount |


🗂️ File Structure

/src
  ├── assets/           // All weather icons and images
  ├── Weather.jsx       // Main weather component
  ├── Weather.css       // Styling file
  └── App.jsx           // App entry point (imports Weather)


 🛠️ Setup Instructions

1. **Clone the repo**

```bash
git clone https://github.com/your-username/weather-app.git
cd weather-app
```

2. **Install dependencies**

```bash
npm install
```

3. **Add your OpenWeatherMap API key**

Create a `.env` file at the root of your project:

```env
VITE_APP_ID=your_openweather_api_key
```

4. **Start the app**

```bash
npm run dev
```

---

🌍 API Reference

* **OpenWeatherMap API**
  [https://openweathermap.org/api](https://openweathermap.org/api)

  * Sign up for a free API key
  * Use the `Current Weather Data` endpoint

---

### 🙋‍♂️ What I Learned

* Fetching real-time API data with React
* Managing user input using `useRef`
* Handling UI state and rendering conditions
* Displaying dynamic images based on API response
* Creating a fully functional UI with CSS and React

---




