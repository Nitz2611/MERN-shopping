import mongoose from "mongoose";
import colors from "colors";

// function for database connection
const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL)
        console.log(`Connected to Mongodb Database ${conn.connection.host}`.bgGreen.white);
    } catch (error) {
        console.log(`Error in Mongdb ${error}`.bgRed.white);
    }
};

export default connectDB