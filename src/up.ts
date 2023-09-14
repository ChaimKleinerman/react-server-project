//m//import library
import express from "express";
import { router } from "./routs.js";
import morgan from "morgan";
import cors from "cors"

const app = express();
app.use(cors())
app.use(morgan("combined"));
app.use(express.json());
app.use("/api", router);


//creating the server
app.listen(3000, () => {
    console.log("server is running");
});






