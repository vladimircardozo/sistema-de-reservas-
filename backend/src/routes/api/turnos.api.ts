import express from "express";
import {
    createTurno,
    getAllTurnos,
    getTurnoById,
    updateTurno,
    deleteTurno
} from "../../controllers/turnos.controller";

const router = express.Router();

router.post("/", createTurno); 
router.get("/", getAllTurnos);
router.get("/:id", getTurnoById);
router.put("/:id", updateTurno);
router.delete("/:id", deleteTurno);

export default router;