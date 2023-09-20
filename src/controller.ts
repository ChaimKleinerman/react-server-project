import { getData,tripById,deleteTrip,updateTrip} from "./BL.js";
import { Request, Response } from "express";
//get all trips
const allTrips = (req:Request, res:Response) => {
    getData()
        .then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.error("An error occurred:", error);
            res.status(500).send("Internal Server Error");
        });
};
//get data by id
const TripByIdController =async(req:Request, res:Response) => {
    try {
        await tripById(req)
    } catch (err) {
        res.status(err.code)
        res.send(err.massage)
    }
    // const userId:string = req.params.id;
    // tripById(userId)
    //     .then((filterData) => {
    //         res.send(filterData);
    //     })
    //     .catch((error) => {
    //         console.error("An error occurred:", error);
    //         res.status(500).send("Internal Server Error");
    //     });
};
//delete trip
const controlDelete = async (req:Request, res:Response) => {
    try {
        const userId = req.params.id;
        const result =  deleteTrip(userId);
        res.send('the trip deleted');
    } catch (error) {
        console.error("An error occurred:", error);
        res.status(500).send("Internal Server Error");
    }
};

//update
const controlUpdate = (req:Request, res:Response) => {
    console.log('hi');
    
   try {const newData = req.body;
    const id = req.params.id;
    const resolve = updateTrip(newData, id)
        res.send(resolve)}
        catch(error) {
            console.error("An error occurred:", error);
            res.status(500).send("Internal Server Error");
        }
};
//get trip by id
// 
export{allTrips,TripByIdController,controlDelete,controlUpdate}