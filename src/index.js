import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config({
    path: "./.env"
})

connectDB()
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log(`app is running on ${process.env.PORT}`)
        })
    })
    .catch((err) => {
        console.log(`MongoDB Connection Failed... !! ${err}`)
    })