import { Router } from "express";
import controller from "../controller/personController"

const router = Router()
router.get("/", controller.get)
export default router