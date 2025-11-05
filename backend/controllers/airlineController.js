import { getAirlineData } from "../services/aviationService.js";

export const getAirlineDetails = async (req, res) => {
  try {
    const { iataCode } = req.params;
    const data = await getAirlineData(iataCode);
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error fetching airline data", error: err.message });
  }
};
