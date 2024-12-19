"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const turnos_api_1 = __importDefault(require("./turnos.api"));
const apiRouter = express_1.default.Router();
console.log("Configurando las rutas de la API...");
apiRouter.use("/turnos", turnos_api_1.default);
exports.default = apiRouter;
