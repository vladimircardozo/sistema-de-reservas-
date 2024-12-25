"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const turnos_controller_1 = require("../../controllers/turnos.controller");
const turnosRouter = express_1.default.Router();
turnosRouter.post("/", turnos_controller_1.createTurno);
turnosRouter.get("/", turnos_controller_1.getAllTurnos);
turnosRouter.get("/:id", turnos_controller_1.getTurnoById);
turnosRouter.put("/:id", turnos_controller_1.updateTurno);
turnosRouter.delete("/:id", turnos_controller_1.deleteTurno);
exports.default = turnosRouter;
