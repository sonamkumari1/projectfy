import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from 'dotenv'
import userApi from "./router/user.router.js"
import projectRoutes from "./router/project.router.js"

dotenv.config()
const app = express();

app.use(express.json());
app.use("/uploads", express.static("uploads"));
app.use(cors());


mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("mongodb connected"))
  .catch((err) => console.log(err));

  app.use('/api/auth', userApi)
  app.use("/api/project", projectRoutes);

const PORT = 4000;

app.listen(PORT, () => {
  console.log(`Server Running ${PORT}`);
});
