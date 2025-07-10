
# 🌤️ Weather App using React.js

GitHub Link: 

This is a simple weather app I made using **React.js**. It takes a city name from the user and shows the current temperature, humidity, and wind speed using the **OpenWeatherMap API**. It also changes the weather icon based on the data.

## 🔧 Tools and Technologies

- React.js with hooks (`useState`, `useEffect`, `useRef`)
- Fetch API for getting weather data
- Tailwind CSS (for styling)
- OpenWeatherMap API

## 🖼️ Screenshot

![Weather App Screenshot](./screenshot.png)

## 🚀 What This App Does

- You can search the weather by entering a city name
- It shows:
  - Temperature (in °C)
  - Humidity (in %)
  - Wind speed (in km/h)
- It shows different weather icons depending on the weather
- If you search something wrong or blank, it shows an error
- On first load, it shows weather info for Kolkata

## 🧠 Hooks I Used

| Hook        | Why I used it                              |
|-------------|---------------------------------------------|
| `useRef`    | To take city name input without re-render   |
| `useState`  | To manage weather data and error/loading    |
| `useEffect` | To load default weather when app opens      |

## 🗂️ File Structure (Main Files)

```

src/
├── assets/        # icons
├── Weather.jsx    # main logic
├── Weather.css    # styles
└── App.jsx        # main file

````

## 🛠️ How to Run This App

1. Clone the repo:

```bash
git clone https://github.com/Tuhin2222001/MyWeatherApp.git
cd MyWeatherApp
````

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file and add your API key:

```
VITE_APP_ID=your_api_key_here
```

4. Start the app:

```bash
npm run dev
```

## 🌐 API Used

* [OpenWeatherMap API](https://openweathermap.org/api)

---

## ✨ What I Learned

* How to call APIs in React
* How `useRef` works with input fields
* How to show different things based on state
* A bit of CSS and React styling

---

Thanks for checking it out!

```

