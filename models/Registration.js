import mongoose from 'mongoose'

const RegistrationSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    mobile: { type: String, required: true },
    city: { type: String, required: true },
    pincode: { type: String, required: true },
    address: { type: String, required: true },
    education: { type: String, required: true },
    course: { type: String, required: true },
  },
  { timestamps: true }
)

export default mongoose.models.Registration ||
  mongoose.model('Registration', RegistrationSchema)
