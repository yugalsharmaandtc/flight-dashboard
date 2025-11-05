import express from "express";
import { getFlightByNumber, getLiveFlights } from "../controllers/flightController.js";
const router = express.Router();

router.get("/live", getLiveFlights);             // returns many active flights (limited by API)
router.get("/:flightNumber", getFlightByNumber); // fetches by IATA like AI302

export default router;
