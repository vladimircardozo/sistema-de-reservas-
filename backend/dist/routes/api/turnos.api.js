"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const turnos_controller_1 = require("../../controllers/turnos.controller");
const router = express_1.default.Router();
router.post("/", turnos_controller_1.createTurno);
router.get("/", turnos_controller_1.getAllTurnos);
router.get("/:id", turnos_controller_1.getTurnoById);
router.put("/:id", turnos_controller_1.updateTurno);
router.delete("/:id", turnos_controller_1.deleteTurno);
exports.default = router;
