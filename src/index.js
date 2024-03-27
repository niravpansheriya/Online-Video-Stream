import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config({
    path: "./env"
})

connectDB()
    .then(() => {
        app.listen(3000, () => {
            console.log(`app is running on 3000`)
        })
    })
    .catch((err) => {
        console.log(`MongoDB Connection Failed... !! ${err}`)
    })