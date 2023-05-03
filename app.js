import express from "express";
import dotenv from "dotenv";
import { join } from "path";
import { Connectdb } from "./Database/Connectdb.js";
import FlightRoutes from "./Routes/FlightRoutes.js";

const app = express();

//  get env file  absloute path
let envfileabsPath = join(process.cwd(), "Config", ".env");

// Error Handler
process.on("uncaughtException", (err) => {
  process.exit(1);
});

//   Confrigation of env File
dotenv.config({ path: envfileabsPath });

// Built in MiddleWare
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//  Connect Database
Connectdb();

// SetUp Routes

app.use("/flightData", FlightRoutes);

//get Port
const port = process.env.PORT;
const server = app.listen(port);

// Error Handler
process.on("unhandledRejection", (err) => {
 
  server.close(() => {
    process.exit(1);
  });
});
