import mongoose from "mongoose";

const sellerViewSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    discountPer: {
      type: Number,
      default: 0,
    },
    photo: {
      type: String,
    },
    video: {
      type: String,
    },
    rating: {
      type: Number,
      default: 0,
    },
    desc: {
      type: String,
    },
    domaincategory: {
      type: [String],
      enum: [
        "web development",
        "mobile developement",
        "game development",
        "data science projects",
        "c++ projects",
        "python projects",
        "java projects",
        "c projects",
      ],
      default: [],
    },
     category: {
      type: [String],
      enum: ["college", "experts", "domain"],
      default: [],
    },

    github: {
      type: String,
    },
  },
  { timestamps: true }
);

const Seller = mongoose.model("sellerView", sellerViewSchema);
export default Seller;
