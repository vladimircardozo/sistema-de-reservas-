import express from "express";
import {
    createTurno,
    getAllTurnos,
    getTurnoById,
    updateTurno,
    deleteTurno
} from "../../controllers/turnos.controller";

const turnosRouter  = express.Router();

turnosRouter .post("/", createTurno); 
turnosRouter .get("/", getAllTurnos);
turnosRouter .get("/:id", getTurnoById);
turnosRouter .put("/:id", updateTurno);
turnosRouter .delete("/:id", deleteTurno);

export default turnosRouter ;