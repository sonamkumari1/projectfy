import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from 'dotenv'
import userApi from "./router/user.router.js"
import sellerRoutes from "./router/seller.router.js"

dotenv.config()
const app = express();

app.use(express.json());
app.use("/uploads", express.static("uploads"));
app.use(cors());


mongoose
  .connect(
    "mongodb+srv://sonamkumari63928:DhHnqbKSIyBxhA1U@cluster0.btmxgp7.mongodb.net/projectify"
  )
  .then(() => console.log("mongodb connected"))
  .catch((err) => console.log(err));

  app.use('/api/auth', userApi)
  app.use("/api/seller", sellerRoutes);

const PORT = 4000;

app.listen(PORT, () => {
  console.log(`Server Running ${PORT}`);
});
