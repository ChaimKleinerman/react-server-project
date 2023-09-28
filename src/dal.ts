//modules
import { Trip } from "./types.js";
import { connectToDb } from "./app.js";
import { tripModel } from "./models/modelTrip.js";
import { UserModel } from "./models/modelUser.js";
import { Err } from "./types.js";
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
    if (!dataById) {
        throw { code: 42231, massage: "data not found" };
    }
    return dataById;
}
//delete data

async function dal_delete(id: string) {
    const response = await tripModel.deleteOne({ _id: id });
    if(!response) throw new Err(500,'the delete been filed')
    return 'delete successfully'
}

//update data
async function dal_update(newData: Trip, id: string) {
   
        const update = await tripModel.updateOne(
            { _id: id },
            { $set: { ...newData} }
        );
      if(!update)
      throw new Err(500,'the update been filed')
    return 'the user updated successfully'
}


//user register
async function insertUser(email: string, password: string) {
    const newUser =  new UserModel({ email: email, password: password });
   const result = await newUser.save()
   if(!result)
   throw new Err (500,'the insert been felid')
    return 'the user inserted successful'
}
//user login
const dal_login  = async (email: string, password: string)=>{
   const user = UserModel.findOne({email: email, password: password })
   if(!user) throw new Err(400,'user is not exist')
   return 'user exist'

}
//new trip
const dal_newTrip = async (newData:Trip) => {
    const newTrip = new tripModel({...newData})
    const result = await newTrip.save()
    if(!result)
   throw new Err (500,'the insert been felid')
    return 'the trip inserted successful'
}
export { getAllData, getDataById, dal_delete, dal_update,insertUser,dal_login,dal_newTrip};
