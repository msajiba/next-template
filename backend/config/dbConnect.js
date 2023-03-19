const { default: mongoose } = require("mongoose");
import dotenv from 'dotenv';
dotenv.config();

const dbConnect = () => {
    if(mongoose.connection.readyState >= 1){
        return console.log("Database connected");
    }
    mongoose.connect(process.env.MONGODB_URL);
};
export default dbConnect;