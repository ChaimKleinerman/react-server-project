//modules
import { Trip } from "./types.js";
import { connectToDb } from "./up.js";
import { tripModel } from "./modelTrip.js";

//connection
connectToDb();

//gat all data
const getAllData = async () => {
    const data = await tripModel.find({}).exec();
    return data;
};

//gat data by id
async function getDataById(id: string) {
    const dataById = await tripModel.findById(id).exec();
    if(!dataById){
        throw {code : 42231 , massage : "produvt not found"}
    }
    return dataById;
}
//delete data
//why it won't works without a variable
async function deleteData(id: string) {
    const trip = await tripModel.deleteOne({ _id: id });
   
    
}

//function update data
async function updateData(newData: Trip, id: string) {
    try {
     
  
      // Create an object with fields to update
     
      const update = await tripModel.updateOne(
        {_id:id},
        {$set:{name:newData.name}}
      )
        console.log(newData);
        
      console.log('Update result:', update);
  
      
    } catch (error) {
      console.error('Error updating the trip:', error);
    }
  }
  
  
  

// async function updateData(newData: Trip, id: string) {
//     const collection = await allData();
//     const updateResult = await collection.updateOne(
//         { id: `${id}` },
//         { $set: newData }
//     );
// }

// allData()
//     .then(console.log)
//     .catch(console.error)
//     .finally(() => client.close());
export { getAllData, getDataById, deleteData, updateData };
