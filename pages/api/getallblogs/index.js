
import BlogModel from "../../../models/blog";
import dbConnect from "../../../config/dbConnect";

export default async function handler(req, res) {
  dbConnect();


  try {
    const Blog = await BlogModel.find();
    res.status(200).json({
      success: true,
      Blog,
    });
  } catch (error) {
    console.log(error);
  }
}