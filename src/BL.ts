//modules
import { getAllData,getDataById,deleteData,updateData} from "./dal.js";
import { Trip } from "./types.js";
//get all trips
async function getData() {
    const dataJson = await getAllData();
    if (!(dataJson instanceof Error))
  
    return dataJson
}
//get trip by id
async function tripById(id:string) {
    const dataJson = await getDataById(id);
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