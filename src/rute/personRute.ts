import { Router } from "express";
import controller from "../controller/personController"

const router = Router()
router.get("/", controller.get)
router.get("/findById", controller.getById)
router.post("/", controller.postProduct)
router.put("/", controller.putProduct)
router.delete("/", controller.deleteProduct)

export default router