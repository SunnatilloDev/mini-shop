import { Router } from "express";
import { registerHandler } from "./auth.controller.js";

const router = Router()

router.post('/register', registerHandler)

export default router