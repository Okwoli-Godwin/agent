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
exports.getAll = exports.registeragent = void 0;
const asyncHandler_1 = require("../utils/asyncHandler");
const index_1 = __importDefault(require("../model/index"));
exports.registeragent = (0, asyncHandler_1.AsyncHandler)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // const {firstname,lastname,email,phone,address} = req.body
    try {
        const register = yield index_1.default.create(req.body);
        res.status(200).json({
            messgae: "craeted",
            data: register
        });
    }
    catch (error) {
        console.log(error);
    }
}));
const getAll = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const agent = yield index_1.default.find();
        res.status(200).json({
            messgae: "agents",
            data: agent
        });
    }
    catch (error) {
        console.log(error);
    }
});
exports.getAll = getAll;
