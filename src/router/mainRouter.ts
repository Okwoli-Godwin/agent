import express from "express"
import {registeragent, getAll} from "../controller/index"
const router = express.Router()

router.route("/create").post(
registeragent
)
router.route("/fetch").get(
getAll
)

export default router