//modules
import {
    getAllData,
    getDataById,
    dal_delete,
    dal_update,
    insertUser,
    dal_login,
    dal_newTrip,
} from "./dal.js";
import { Trip } from "./types.js";
import { Request, Response } from "express";
import { Err } from "./types.js";
import jwt from "jsonwebtoken";

//get all trips
async function getData() {
    const dataJson = await getAllData();
    if (!(dataJson instanceof Error)) return dataJson;
}
//get trip by id
async function tripById(req: Request) {
    let { id } = req.params;
    if (!id) {
        throw new Err(422, "didn't get id! this is what i got " + id);
    }
    const dataJson = await getDataById(req.params.id);
    if (!(dataJson instanceof Error)) return dataJson;
}
//delete trip
function bl_delete(req: Request) {
    const { id } = req.params;
    if (!id) throw new Err(400, "didn't get id, this is what i gat " + id);
    const response = dal_delete(id);
    return response;
}
//update trip
async function bl_update(req: Request) {
    const { id } = req.params;
    const newData = req.body;
    if (!id) throw new Err(400, "didn't get id, this is what i gat " + id);
    if (!newData) new Err(400, "didn't get data body");
    const dal_updateResponds = await dal_update(newData, id);
    return dal_updateResponds;
}
//register user
async function bl_insertUser(req: Request) {
    const userEmail = req.body.email;
    const userPassword = req.body.password;
    if (!userEmail) throw new Err(400, "didn't get user email");
    if (!userPassword) throw new Err(400, "didn't get user password");
    const dal_respond = await insertUser(userEmail, userPassword);
    return dal_respond;
}
//user login
const bl_login = async (req: Request) => {
    const userEmail = req.body.email;
    const userPassword = req.body.password;
    if (!userEmail) throw new Err(400, "didn't get user email");
    if (!userPassword) throw new Err(400, "didn't get user password");
    const dal_respond = await dal_login(userEmail, userPassword);
    if (dal_respond) {
        if (!process.env.ACCESS_TOKEN_SECRET)
            throw new Err(500, "problem with getting token");
        const accessToken = jwt.sign(
            userPassword,
            process.env.ACCESS_TOKEN_SECRET,{expiresIn:"30s"}
        );
        return accessToken;
    }
};
//new trip
async function bl_newTrip(req: Request) {
    const newData = req.body;
    if (!newData) throw new Err(400, "didn't get data");
    const dal_respond = await dal_newTrip(newData)
    return dal_respond
}
export { getData, tripById, bl_delete, bl_update, bl_insertUser, bl_login,bl_newTrip };
