import express from "express";
import multer from "multer";
import { addSeller } from "../controller/sellerController.js";

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
  "/selleradd",
  upload.fields([
    { name: "photo", maxCount: 1 },
    { name: "video", maxCount: 1 },
  ]),
  addSeller
);

export default router;
