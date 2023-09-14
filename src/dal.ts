//modules
import { MongoClient } from "mongodb";
import { Trip } from "./types";
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
async function getDataById(id: string) {
    const collection = await allData();
    const findResult = await collection.find({ id: `${id}` }).toArray();
    return findResult;
}
//function delete data
async function deleteData(id: string) {
    const collection = await allData();
    const findResult = await collection.deleteOne({ id: `${id}` });
}
//function update data
async function updateData(newData: Trip, id: string) {
    const collection = await allData();
    const updateResult = await collection.updateOne(
        { id: `${id}` },
        { $set: newData }
    );
}

allData()
    .then(console.log)
    .catch(console.error)
    .finally(() => client.close());
export { getAllData, getDataById, deleteData, updateData };
