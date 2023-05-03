import express from "express";
import {
  CreateFlightDocument,
  getAllFlightNameAndPrice,
  getAllFlightData,
  getSinleFlightData,
} from "../Controller/FlightConroller.js";

const router = express.Router();

//  Flight Route

//  Create Flight Data
router.post("/", CreateFlightDocument);

//  get All Flight Data
router.get("/all", getAllFlightData);

// get Single Flight Data  By Flight Document Id
router.get("/:id", getSinleFlightData);

//  get Flight Name and Price
router.get("/", getAllFlightNameAndPrice);
export default router;
