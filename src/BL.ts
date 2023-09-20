//modules
import { getAllData,getDataById,deleteData,updateData} from "./dal.js";
import { Trip } from "./types.js";
import { Request, Response } from "express";

//get all trips
async function getData() {
    const dataJson = await getAllData();
    if (!(dataJson instanceof Error))
  
    return dataJson
}
//get trip by id
async function tripById(req:Request) {

    let {id} = req.params 
    if(!id){
        throw {code: 422 , massage: "didnt recive id! this is what i got " + id}
    }
    const dataJson = await getDataById(req.params.id);
    if (!(dataJson instanceof Error))
    return dataJson
}
//delete trip
function deleteTrip(id:string) {
     deleteData(id);
    }
//update trip 
function updateTrip(newData:Trip,id:string) {
   
    
   updateData(newData,id)
}
export{getData,tripById,deleteTrip,updateTrip}