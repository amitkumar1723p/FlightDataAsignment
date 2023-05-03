import mongoose from "mongoose";

const Flight_Schema = mongoose.Schema({
  Source: {
    type: String,
    trim: true,
    required: [true, "Source is required"],
  },
  Destination: {
    type: String,
    trim: true,
    required: [true, "Destination is required"],
  },
  Airline: {
    type: String,
    trim: true,
    required: [true, "Airline  is required"],
  },
  Price: {
    type: Number,
    trim: true,
    required: [true, "Price is required"],
  },
  Date: {
    type: Date,
    trim: true,
    required: [true, "Date is required"],
  },
});

const Flight_Model = mongoose.model("AirlineData", Flight_Schema);
export default Flight_Model;
