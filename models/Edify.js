import mongoose from "mongoose";

const edifySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
      trim: true,
    },
    slug: {
      type: String,
      required: [true, "Slug is Required!"],
      unique: true,
      trim: true,
    },
    metaTitle: {
      type: String,
      required: [true, "Meta title is required"],
      trim: true,
    },
    description: {
      type: String,
      required: [true, "Description is required"],
      trim: true,
    },
    Metadesc: {
      type: String,
      required: [true, "Meat description is required"],
      trim: true,
    },
    image: [
      {
        imgUrl: {
          type: String,
          trim: true,
        },
        imgAlt: {
          type: String,
          trim: true,
        },
      },
    ],
  },
  { timestamps: true }
);

export default mongoose?.models?.Edify || mongoose?.model("Edify", edifySchema);
