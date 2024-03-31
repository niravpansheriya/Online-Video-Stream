import mongoose from "mongoose";
import { USER_DB } from "../constants.js";
const connectDB = async() => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${USER_DB}`)
        console.log(`\n MongoDb connected !! DB Host ${connectionInstance.connection.host}`)
    } catch (error) {
        console.log("MongoDB Connection error ", error)
        process.exit(1)
    }
}

export default connectDB