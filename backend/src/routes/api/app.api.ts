import express from 'express';
import turnosRouter from './turnos.api';

const apiRouter = express.Router();


apiRouter.use("/turnos", turnosRouter);

export default apiRouter;