import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

const WEATHER_URL = "https://api.openweathermap.org/data/2.5/weather";

export const getWeatherData = async (city) => {
  if (!city) return null;
  const res = await axios.get(WEATHER_URL, {
    params: { q: city, appid: process.env.WEATHER_KEY, units: "metric" }
  });
  return res.data;
};
