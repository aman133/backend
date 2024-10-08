// require('dotenv').config({path:'./env'})
import dotenv from "dotenv"

import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config({
    path: './env'
})

const port = process.env.PORT || 8000;
connectDB()
    .then(() => {
        app.on("error", (error) => {
            console.log("error: ", error);
            throw error;
        })
        app.listen(port, () => {
            console.log(`server is running at port: ${port}`);

        })
    })
    .catch((error) => {
        console.log('MONDO DB connection FAILED !!!', error);
    })









/*import express from "express";

const app = express();

(async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)

        app.on("error", (error) => {
            console.log("error: ", error);
            throw error;
        })
        app.listen(process.env.PORT, () => {
            console.log(`app is listening on port ${process.env.PORT}`);

        })
    } catch (error) {
        console.error("Error", error);
        throw error;
    }
})()

*/