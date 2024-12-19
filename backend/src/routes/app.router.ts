import express from "express"
import apiRouter from "./api/app.api"

const app = express()

console.log("Configurando rutas...");

app.use("/api", apiRouter)

export default app;