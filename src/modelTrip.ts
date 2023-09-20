//modules
import {  Schema,model } from "mongoose";
import { Trip } from "./types";
import { connectToDb } from "./up";
//instance
//why it works only in this way 
const tripSchema = new Schema(
    {
        title: String,
        slug: String,
        published: Boolean,
        author: String,
        content: String,
        tags: [String],
        createdAt: Date,
        updatedAt: Date,
        comments: [
          {
            user: String,
            content: String,
            votes: Number,
          }]
        }
)
//hwy there is no need to use mongoose
const tripModel = model('trips',tripSchema)
export {tripModel} 