import express from "express";
import { home, loadAdmin, uploadFile } from "../controllers/controller.js";
import { upload } from "../middleware/multer.js"; // 👈 import multer setup

const router = express.Router();

router.get("/", home);
router.get("/portal", loadAdmin);

router.get('/upload', loadAdmin)

// Use multer to handle the file upload before calling your controller
router.post("/upload", upload.single('image'), uploadFile);

export default router;