import mongoose from "mongoose";

const connectDB = async() => {
    try {
        const connectionInstance = await mongoose.connect("mongodb+srv://NiravPansheriya:NiravAtlas@cluster0.mpuhjjz.mongodb.net/videostream")
        console.log(`\n MongoDb connected !! DB Host ${connectionInstance.connection.host}`)
    } catch (error) {
        console.log("MongoDB Connection error ", error)
        process.exit(1)
    }
}

export default connectDB