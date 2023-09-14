//modules
import { MongoClient } from "mongodb";
//instance
const client = new MongoClient("mongodb://127.0.0.1:27017");
//function all data
async function allData() {
    await client.connect();
    const db = client.db("tripsData");
    const collection = db.collection("trips");
    return collection;
}
//function get all data
async function getAllData() {
    const collection = await allData();
    const findResult = await collection.find({}).toArray();
    return findResult;
}
//function get data by id
async function getDataById(id) {
    const collection = await allData();
    const findResult = await collection.find({ id: `${id}` }).toArray();
    return findResult;
}
//function delete data
async function deleteData(id) {
    const collection = await allData();
    const findResult = await collection.deleteOne({ id: `${id}` });
}
//function update data
async function updateData(newData, id) {
    const collection = await allData();
    const updateResult = await collection.updateOne({ id: `${id}` }, { $set: newData });
}
allData()
    .then(console.log)
    .catch(console.error)
    .finally(() => client.close());
export { getAllData, getDataById, deleteData, updateData };
