import express from "express";
import { home, loadAdmin } from "../controllers/controller.js";

const router = express.Router();

router.get("/", home);

router.get("/portal", loadAdmin);

export default router;
