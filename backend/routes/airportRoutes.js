import express from "express";
import { getAirportDetails } from "../controllers/airportController.js";
const router = express.Router();
router.get("/:iataCode", getAirportDetails);
export default router;

