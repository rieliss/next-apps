import mongoose, { Schema } from "mongoose";

const topicSchema = new mongoose.Schema(
  {
    title: String,
    description: String,
  },
  {
    timestamps: true,
  }
);

const Detail =
  mongoose.models.details || mongoose.model("details", topicSchema);
export default Detail;
