import { Router } from "express"

//? ROUTES
import main from "./main"

//? ROUTER
const router = Router()

//? URLS
router.use("/", main)

export default router