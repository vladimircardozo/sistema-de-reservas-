"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTurno = exports.updateTurno = exports.getTurnoById = exports.getAllTurnos = exports.createTurno = void 0;
const turnos_model_1 = __importDefault(require("../data/mongo/models/turnos.model"));
const createTurno = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newTurno = new turnos_model_1.default(req.body);
        const savedTurno = yield newTurno.save();
        res.status(201).json(savedTurno);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
});
exports.createTurno = createTurno;
const getAllTurnos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const turnos = yield turnos_model_1.default.find();
        res.status(200).json(turnos);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
exports.getAllTurnos = getAllTurnos;
const getTurnoById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const turno = yield turnos_model_1.default.findById(req.params.id);
        // if (!turno) return res.status(404).json({ message: "Turno no encontrado" });
        res.status(200).json(turno);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
exports.getTurnoById = getTurnoById;
const updateTurno = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const updatedTurno = yield turnos_model_1.default.findByIdAndUpdate(req.params.id, req.body, { new: true });
        // if (!updatedTurno) return res.status(404).json({ message: "Turno no encontrado"});
        res.status(200).json(updatedTurno);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
});
exports.updateTurno = updateTurno;
const deleteTurno = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deletedTurno = yield turnos_model_1.default.findByIdAndDelete(req.params.id);
        // if (!deletedTurno) return res.status(404).json({ message: "Turno no encontrado"});
        res.status(200).json(deletedTurno);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
exports.deleteTurno = deleteTurno;
