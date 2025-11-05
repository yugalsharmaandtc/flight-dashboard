import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

const BASE_URL = "http://api.aviationstack.com/v1";
const KEY = process.env.AVIATION_KEY;

export const getFlightData = async (flightNumber) => {
  // flightNumber e.g. AI302
  const res = await axios.get(`${BASE_URL}/flights`, {
    params: { access_key: KEY, flight_iata: flightNumber }
  });
  // aviationstack returns { data: [ ... ] }
  return res.data?.data?.[0] || {};
};

export const getLiveFlightData = async () => {
  const res = await axios.get(`${BASE_URL}/flights`, {
    params: { access_key: KEY, flight_status: "active", limit: 50 }
  });
  return res.data?.data || [];
};

export const getAirlineData = async (iataCode) => {
  const res = await axios.get(`${BASE_URL}/airlines`, {
    params: { access_key: KEY, iata_code: iataCode }
  });
  return res.data?.data?.[0] || {};
};

export const getAirportData = async (iataCode) => {
  const res = await axios.get(`${BASE_URL}/airports`, {
    params: { access_key: KEY, iata_code: iataCode }
  });
  return res.data?.data?.[0] || {};
};
