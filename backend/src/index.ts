import express from "express";
import connectDB from "./config/db";
import dotenv from "dotenv";

dotenv.config();

const index = express();
const port = process.env.PORT;

connectDB()
.then(() => {
    index.listen(port, () => {
        console.log(`Servidor escuchado en el puerto ${port}`);
    });
})
.catch((error) => {
    console.log("Error al conectar a la base de datos:", error)
    process.exit(1);
});