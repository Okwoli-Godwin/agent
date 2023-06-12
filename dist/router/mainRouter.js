"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const index_1 = require("../controller/index");
const router = express_1.default.Router();
router.route("/create").post(index_1.registeragent);
router.route("/fetch").get(index_1.getAll);
exports.default = router;
