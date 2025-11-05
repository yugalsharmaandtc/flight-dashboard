import { getFlightData, getLiveFlightData } from "../services/aviationService.js";

export const getFlightByNumber = async (req, res) => {
  try {
    const { flightNumber } = req.params;
    const data = await getFlightData(flightNumber);
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error fetching flight data", error: err.message });
  }
};

export const getLiveFlights = async (req, res) => {
  try {
    const data = await getLiveFlightData();
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error fetching live flights", error: err.message });
  }
};
