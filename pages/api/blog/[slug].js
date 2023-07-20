import dbConnect from "../../../config/dbConnect";
import BlogModel from "../../../models/blog";


export default async function handler(req, res) {
  switch (req.method) {
    case "GET":
      try {
        const singleBlog = await BlogModel.findOne({
          slug: req.query.slug,
        });
        res.status(200).json({
          success: true,
          singleBlog,
        });
      } catch (err) {
        res.status(err);
      }
      break;

    case "PUT":
      try {
        const singleBlog = await BlogModel.findOne({
          slug: req.query.slug,
        });
        if (!singleBlog) {
          res.status(404).json({ success: false, message: "Blog Not Found" });
        } else {
          const updateblog = await BlogModel.findByIdAndUpdate(
            singleBlog._id,
            {
              $set: {
                ...req.body,
                slug: req.body.title
                  .trim()
                  .toLowerCase()
                  .replace(/ /g, "-")
                  .replace(/[^\w-]+/g, "")
                  .replace(/--/g, "-"),
              },
            },
            { new: true }
          );
          res.status(200).json({
            success: true,
            updateblog,
          });
        }
      } catch (e) {
        res.status(e);
      }
      break;

      
    case "DELETE":
      try {
        const singleBlog = await BlogModel.findOne({
          slug: req.query.slug,
        });
        if (!singleBlog) {
          res.status(404).json({ success: false, message: "Blog Not Found" });
        } else {
          const DeleteBlog = await BlogModel.findByIdAndDelete(singleBlog._id);
          res.status(200).json({
            success: true,
            message: "Your Blog has been deleted successfuly",
          });
        }
      } catch (err) {
        res.status(err);
      }

      break;
    default:
      break;
  }
}
