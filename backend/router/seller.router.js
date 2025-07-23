import express from "express";
import multer from "multer";
import { addSeller, deleteSeller, getallSeller, getSellerById, updateSeller, getSellerByCategory } from "../controller/sellerController.js";

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

router.get("/", getallSeller)
router.get("/:id", getSellerById)

router.put("/update/:id", upload.fields([{name: "photo", maxCount:1}, {name: "video", maxCount: 1}]),
updateSeller
)

router.delete("/delete/:id", deleteSeller)
router.get("/category/:category", getSellerByCategory);

export default router;
