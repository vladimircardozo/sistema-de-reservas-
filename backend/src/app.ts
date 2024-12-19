import express from "express";
import connectDB from "./config/db";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(express.json())

connectDB()
.then(() => {
    app.listen(port, () => {
        console.log(`Servidor escuchado en el puerto ${port}`);
    });
})
.catch((error) => {
    console.log("Error al conectar a la base de datos:", error)
    process.exit(1);
});