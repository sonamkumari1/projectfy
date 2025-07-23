import Seller from "../model/seller.js";

export const addSeller = async (req, res) => {
  const {
    title,
    price,
    discountPer,
    rating,
    desc,
    domaincategory,
    category,
    github,
    frontend,
    backend,
    database,
  } = req.body;
  try {
    const photo = req.files?.photo?.[0]?.filename;
    const video = req.files?.video?.[0]?.filename;

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
      github,
      frontend,
      backend,
      database,
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

export const getallSeller = async (req, res) => {
  try {
    const seller = await Seller.find();
    res.status(201).json({
      success: true,
      message: "All sellers fetched successfully",
      data: seller,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch sellers",
      error: error.message,
    });
  }
};

export const getSellerById = async (req, res) => {
  try {
    const seller = await Seller.findById(req.params.id);
    if (!seller) {
      return res.status(404).json({
        success: false,
        message: "Seller not found",
      });
    }
    res.status(200).json({
      success: true,
      message: "Seller fetched successfully",
      data: seller,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch seller",
      error: error.message,
    });
  }
};

export const updateSeller = async (req, res) => {
  const {
    title,
    price,
    discountPer,
    rating,
    desc,
    domaincategory,
    category,
    github,
    frontend,
    backend,
    database,
  } = req.body;
  try {
    const photo = req.files?.photo?.[0]?.filename;
    const video = req.files?.video?.[0]?.filename;

    const updateData = {
      title,
      price,
      discountPer,
      rating,
      desc,
      domaincategory: [domaincategory.toLowerCase()],
      category: [category.toLowerCase()],
      github,
      frontend,
      backend,
      database,
    };

    if (photo) {
      updateData.photo = photo;
    }

    if (video) {
      updateData.video = video;
    }

    const seller = await Seller.findByIdAndUpdate(req.params.id, updateData, {
      new: true,
    });
    if (!seller) {
      return res.status(404).json({
        success: false,
        message: "Seller not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Seller updated successfully",
      data: seller,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to update seller",
      error: error.message,
    });
  }
};

export const deleteSeller = async (req, res) => {
  try {
    const seller = await Seller.findByIdAndDelete(req.params.id);
    if (!seller) {
      return res.status(404).json({
        success: false,
        message: "Seller not found",
      });
    }
    res.status(200).json({
      success: true,
      message: "Seller deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to delete seller",
      error: error.message,
    });
  }
};

export const getSellerByCategory = async (req, res) => {
  const { category } = req.params;
  try {
    const sellers = await Seller.find({
      category: { $in: [category.toLowerCase()] },
    });
    if (sellers.length === 0) {
      return res.status(404).json({
        success: false,
        message: "No sellers found for this category",
      });
    }
    res.status(200).json({
      success: true,
      message: "Sellers fetched successfully",
      data: sellers,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch sellers by category",
      error: error.message,
    });
  }
};
