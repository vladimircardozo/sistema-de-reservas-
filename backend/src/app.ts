import express from "express";
import connectDB from "./config/db";
import dotenv from "dotenv";
import appRouter from "./routes/app.router"

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

console.log("Servidor en ejecución...");

app.use("/", appRouter);

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