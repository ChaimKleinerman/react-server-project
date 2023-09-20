//modules
import { allTrips,TripByIdController,controlDelete,controlUpdate} from "./controller.js";
import express from "express";
const router = express.Router();
//get all trips
router.get("/trips", allTrips);
//get trip by id
router.get("/trips/:id", TripByIdController );
//delete trip
router.delete("/trips/:id",controlDelete);
// //update trip
router.put("/trips/:id", controlUpdate)
export{router}