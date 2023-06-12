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
const express_1 = __importDefault(require("express"));
const mainRouter_1 = __importDefault(require("./router/mainRouter"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const port = process.env.PORT || 3033;
dotenv_1.default.config();
const dbHost = process.env.MONGO_URL;
// const url = "mongodb+srv://agentform:agentform@cluster0.crjcqgg.mongodb.net/?retryWrites=true&w=majority"
const connectDB = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield mongoose_1.default.connect(dbHost);
        console.log("Connected to the database.");
    }
    catch (err) {
        console.log(err);
        process.exit(1);
    }
});
connectDB();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use("/api/agents", mainRouter_1.default);
app.get("/", (req, res) => {
    return res.status(200).json({
        message: "API READY FOR DIRTY ONLINE PROJECT",
    });
});
``;
app.listen(port, () => {
    console.log("server started");
});
