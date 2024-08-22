import express from "express"
import userManegmentRoutes from "./userManagement/index.js"
const router=express.Router()

router.use("/userManagement",userManegmentRoutes)

export default router