import edifyModel from "../../../models/Edify";
import dbConnect from "../../../config/dbConnect";

export default async function handler(req, res) {
  dbConnect();
  try {
    var slug = req.body.title
      .trim()
      .toLowerCase()
      .replace(/ /g, "-")
      .replace(/[^\w-]+/g, "")
      .replace(/--/g, "-");

    const edifyBlog = await edifyModel.create({ ...req.body, slug });
    res.status(201).json({
      success: true,
      message: edifyBlog,
    });
  } catch (error) {
    console.log(error);
  }
}
