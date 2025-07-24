import express from "express";
import multer from "multer";
import { addProject, deleteProject, getallProject, getProjectById, updateProject, getProjectByCategory } from "../controller/projectController.js";

const router = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/"); 
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });

router.post(
  "/projectadd",
  upload.fields([
    { name: "photo", maxCount: 1 },
    { name: "video", maxCount: 1 },
  ]),
  addProject
);

router.get("/", getallProject)
router.get("/:id", getProjectById)

router.put("/update/:id", upload.fields([{name: "photo", maxCount:1}, {name: "video", maxCount: 1}]),
updateProject
)

router.delete("/delete/:id", deleteProject)
router.get("/category/:category", getProjectByCategory);

export default router;
