import { getData, tripById, deleteTrip, updateTrip } from "./BL.js";
//get all trips
const allTrips = (req, res) => {
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
const TripByIdController = async (req, res) => {
    try {
        await tripById(req);
    }
    catch (err) {
        res.status(err.code);
        res.send(err.massage);
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
const controlDelete = async (req, res) => {
    try {
        const userId = req.params.id;
        const result = deleteTrip(userId);
        res.send('the trip deleted');
    }
    catch (error) {
        console.error("An error occurred:", error);
        res.status(500).send("Internal Server Error");
    }
};
//update
const controlUpdate = (req, res) => {
    console.log('hi');
    try {
        const newData = req.body;
        const id = req.params.id;
        const resolve = updateTrip(newData, id);
        res.send(resolve);
    }
    catch (error) {
        console.error("An error occurred:", error);
        res.status(500).send("Internal Server Error");
    }
};
//get trip by id
// 
export { allTrips, TripByIdController, controlDelete, controlUpdate };
