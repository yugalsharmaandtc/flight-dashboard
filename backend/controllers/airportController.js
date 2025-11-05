import { getAirportData } from "../services/aviationService.js";
import { getWeatherData } from "../services/weatherService.js";

export const getAirportDetails = async (req, res) => {
  try {
    const { iataCode } = req.params;
    const airport = await getAirportData(iataCode);
    if (!airport) return res.status(404).json({ message: "Airport not found" });

    // attempt to pick a city name for weather query
    const city = airport.city || airport.name || airport.country;
    const weather = await getWeatherData(city);

    res.json({ airport, weather });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error fetching airport data", error: err.message });
  }
};
