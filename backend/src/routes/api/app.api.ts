import express from 'express';
import turnosRouter from './turnos.api';

const apiRouter = express.Router();

console.log("Configurando las rutas de la API...");

apiRouter.use("/turnos", turnosRouter);

export default apiRouter;