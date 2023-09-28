//modules
import {
    getData,
    tripById,
    bl_delete,
    bl_insertUser,
    bl_login,
    bl_update,
    bl_newTrip,
} from "./BL.js";
import { Request, Response, request } from "express";
import { Err } from "./types.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
//config
dotenv.config();

//get all trips
const allTrips = (req: Request, res: Response) => {
    getData()
        .then((data) => {
            res.json(data);
        })
        .catch((error) => {
            console.error("An error occurred:", error);
            res.status(500).send("Internal Server Error");
        });
};
//get data by id
const TripByIdController = async (req: Request, res: Response) => {
    try {
        const user_id = await tripById(req);
        res.send(user_id);
    } catch (err) {
        if (err instanceof Err) {
            res.status(err.code);
            res.send(err.message);
        }
    }
};
//delete trip
const controller_delete = async (req: Request, res: Response) => {
    try {
        const result = await bl_delete(req);
        res.send("the trip deleted");
    } catch (err) {
        if (err instanceof Err) {
            res.status(err.code);
            res.send(err.message);
        }
    }
};

//update
const controller_update = async (req: Request, res: Response) => {
    
    try {
        const resolve = await bl_update(req);
        
        
        res.send(resolve);
    } catch (err) {
        if (err instanceof Err) {
            res.status(err.code);
            res.send(err.message);
        }
    }
};
//register
async function controllerUserRegister(req: Request, res: Response) {
    try {
        const result = await bl_insertUser(req);
        res.send(result);
    } catch (err) {
        if (err instanceof Err) {
            res.status(err.code);
            res.send(err.message);
        }
    }
}
//user login
const controller_login = async (req: Request, res: Response) => {
    try {
        console.log(req.headers);

        const token = await bl_login(req);
        res.send(token);
    } catch (err) {
        if (err instanceof Err) {
            res.status(err.code);
            res.send(err.message);
        }
    }
};
//new trip
async function controller_newTrip(req:Request,res:Response) {
    try {
        const resolve = await bl_newTrip(req)
        res.send(resolve)
    } catch (err) {
        if (err instanceof Err) {
            res.status(err.code);
            res.send(err.message);
        }
    }
}

export {
    allTrips,
    TripByIdController,
    controller_delete,
    controller_update,
    controllerUserRegister,
    controller_login,
    controller_newTrip
};
