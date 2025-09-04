import { Router } from "express";
import { ProjectController } from "../controllers/project.controller";
import { upload } from "../utils/multer";

const router = Router();

router.post("/", upload.array("images"), ProjectController.create);
router.get("/", ProjectController.getAll);
router.get("/search", ProjectController.searchByTitle);

module.exports = router;

