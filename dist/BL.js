//modules
import { getAllData, getDataById, deleteData, updateData } from "./dal.js";
//get all trips
async function getData() {
    const dataJson = await getAllData();
    if (!(dataJson instanceof Error))
        return dataJson;
}
//get trip by id
async function tripById(req) {
    let { id } = req.params;
    if (!id) {
        throw { code: 422, massage: "didnt recive id! this is what i got " + id };
    }
    const dataJson = await getDataById(req.params.id);
    if (!(dataJson instanceof Error))
        return dataJson;
}
//delete trip
function deleteTrip(id) {
    deleteData(id);
}
//update trip 
function updateTrip(newData, id) {
    updateData(newData, id);
}
export { getData, tripById, deleteTrip, updateTrip };
