"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const db_1 = __importDefault(require("./config/db"));
const dotenv_1 = __importDefault(require("dotenv"));
const app_router_1 = __importDefault(require("./routes/app.router"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT;
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use("/", app_router_1.default);
(0, db_1.default)()
    .then(() => {
    app.listen(port, () => {
        console.log(`Servidor escuchado en el puerto ${port}`);
    });
})
    .catch((error) => {
    console.log("Error al conectar a la base de datos:", error);
    process.exit(1);
});
