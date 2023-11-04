"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("dotenv/config");
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const app = (0, express_1.default)();
//const PORT: number = parseInt(process.env.PORT || "", 10) || 8000;
const PORT = process.env.PORT;
app.use((0, helmet_1.default)());
app.use((0, cors_1.default)({
    origin: ['http://localhost:8000'],
}));
app.get('/', (req, res) => {
    res.send(`Hola, welcome TS Jea`);
});
app.listen(PORT, () => {
    console.log(`[Server]: Is running on http://localhost:${PORT}`);
});
