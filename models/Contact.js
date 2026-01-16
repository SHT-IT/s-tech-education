import mongoose from "mongoose";

const ContactSchema = new mongoose.Schema(
  {
    fullname: {
      type: String,
      required: true,
      trim: true,
      minlength: 2,
      maxlength: 100,
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
    },
    phone: {
      type: String,
      required: true,
      trim: true,
    },
    subject: {
      type: String,
      required: true,
      trim: true,
    },
    message: {
      type: String,
      required: true,
      trim: true,
    },
    ipAddress: String,
    userAgent: String,
  },
  { timestamps: true }
);

// ✅ collection = "contact"
export default mongoose.models.Contact ||
  mongoose.model("Contact", ContactSchema, "s-tech-contact");
