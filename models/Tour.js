import mongoose from "mongoose";

const tourSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    photo: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },

    price: {
      type: Number,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
    },
    featured: {
      type: Boolean,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Tour", tourSchema);