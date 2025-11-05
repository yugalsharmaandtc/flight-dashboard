import express from "express";
import { getAirlineDetails } from "../controllers/airlineController.js";
const router = express.Router();
router.get("/:iataCode", getAirlineDetails);
export default router;
