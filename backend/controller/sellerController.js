import Seller from "../model/seller.js";

export const addSeller = async (req, res) => {
    const {title, price, discountPer, rating, desc, domaincategory, category, github}=req.body
  try {
    
    const photo= req.files?.photo?.[0]?.filename;
    const video=req.files?.video?.[0]?.filename;

    const sell = new Seller({
      title,
      price,
      discountPer,
      photo,
      video,
      rating,
      desc,
      domaincategory: [domaincategory.toLowerCase()],
      category: [category.toLowerCase()],
      github
    });
    const data = await sell.save();
    res.status(201).json({
      success: true,
      message: "Seller added Successfully",
      data: data,
    });
  } catch (error) {
     res.status(500).json({
      success: false,
      message: "Failed to add seller",
      error: error.message,
    });
  }
};
