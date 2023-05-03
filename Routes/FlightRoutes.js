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
router.post("/create", CreateFlightDocument);

//  get Flight Name and Price
router.get("/name/price", getAllFlightNameAndPrice);

//  get All Flight Data
router.get("/all", getAllFlightData);

// get Single Flight Data  By Flight Document Id

router.get("/singleFlightData", getSinleFlightData);

export default router;
