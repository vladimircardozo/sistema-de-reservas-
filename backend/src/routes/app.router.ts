import express from "express"
import turnosRouter from './api/turnos.api';

const app = express()

app.use("/api/turnos", turnosRouter)