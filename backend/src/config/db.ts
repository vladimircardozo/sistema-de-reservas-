import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI || '', {
        });
        console.log('Conectado a MongoDB');
    } catch (error) {
        console.error('No se pudo conectar a MongoDB', error)
        process.exit(1);
    }
};

export default connectDB;