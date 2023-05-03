import FlightModel from "../Model/FlightModel.js";
import { SendError } from "../Utils/SendError.js";

// Insert a Flight Data Document and  save Document in  Database

export const CreateFlightDocument = async (req, res) => {
  try {
    //  Destructure Filed
    const { Source, Destination, Airline, Price, Date } = req.body;
    const FlightData = {
      Source,
      Destination,
      Airline,
      Price,
      Date,
    };
    // Check  AirLine(flight)  is allready Exit
    let findAirline = await FlightModel.findOne({ Airline });
    if (findAirline) {
      let message = "This AirLine(flight) Name is All redy Exist";
      return SendError(res, 400, false, message, null);
    }

    //  Create Database Document
    const FlightDatabaseDocument = new FlightModel(FlightData);
    console.log(FlightDatabaseDocument);
    // Save Document in Database
    const data = await FlightDatabaseDocument.save();

    if (!data) {
      let message = "Flight Document is not Created ";
      return SendError(res, 500, false, message, null);
    }

    //  Send Success Message
    let message = "Flight Document Created Successfully";
    res.status(201).json({ success: true, message });
  } catch (error) {
    SendError(res, 500, false, null, error);
  }
};

//  Get  All Flight Name And Price

export const getAllFlightNameAndPrice = async (req, res) => {
  try {
    //  get Only AirLine(FlightName) And Price Field
    const Flightdata = await FlightModel.find().select("Airline Price");

    if (Flightdata.length == 0) {
      let message = "No flight Data are currently available";
      return SendError(res, 404, false, null, error);
    }

    let data = {};
    Flightdata.forEach((item) => {
      // set Flight Name and price in data variable
      data = { ...data, [item.Airline]: item.Price };
    });

    //  Send Success Message
    res.status(200).json({
      success: true,
      message: "find AirLine And Price",
      FlightPrice: data,
    });
  } catch (error) {
    SendError(res, 500, false, null, error);
  }
};

//  Get All Flight Data

export const getAllFlightData = async (req, res) => {
  try {
    // Find All Flight Data
    let AllFlightData = await FlightModel.find();

    // if Flight Data is not avalable send Error
    if (AllFlightData.length == 0) {
      let message = "No flight Data are currently available";
      return SendError(res, 404, false, message, null);
    }

    // Send Success Message
    let message = "Find All Flight Data";
    res.status(200).json({ success: true, message, AllFlightData });
  } catch (error) {
    SendError(res, 500, false, null, error);
  }
};

// Get Single Flight Data By Flight Document Id

export const getSinleFlightData = async (req, res) => {
  const { id } = req.params;

  try {
    //  find Flight data
    let findFlightData = await FlightModel.findById(id);

    // if This Flight Data is not found send Error
    if (!findFlightData) {
      let message = "This Flight Data is not avalable";
      return SendError(res, 404, false, message, null);
    }

    // Send Success Message
    let message = "Find Flight Data";
    res.status(200).json({ success: true, message, findFlightData });
  } catch (error) {
    SendError(res, 500, false, null, error);
  }
};
