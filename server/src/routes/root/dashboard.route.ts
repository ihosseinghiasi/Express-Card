import { Router } from "express";
import me from "../../controllers/dashboard/dashboard.controller";
const router = Router();

router.get("/me", me);

export default router;
