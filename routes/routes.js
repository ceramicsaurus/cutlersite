import express from "express";
import { home, loadAdmin, uploadFile } from "../controllers/controller.js";

const router = express.Router();

router.get("/", home);

router.get("/portal", loadAdmin);

router.post ("/upload", uploadFile);

export default router;
