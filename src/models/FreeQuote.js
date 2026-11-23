
import mongoose from 'mongoose'

const FreeQuoteSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      maxlength: 100
    },

    phone: {
      type: String,
      required: true,
      trim: true,
      maxlength: 20
    },

    email: {
      type: String,
      trim: true,
      lowercase: true,
      maxlength: 254,
      default: ''
    },

    destination: {
      type: String,
      required: true,
      trim: true,
      maxlength: 150
    },

    travelers: {
      type: Number,
      min: 1,
      max: 20,
      default: 2
    },

    travelDate: {
      type: Date,
      default: null
    },

    message: {
      type: String,
      trim: true,
      maxlength: 1500,
      default: ''
    },

    status: {
      type: String,
      enum: ['new', 'contacted', 'quoted', 'converted', 'closed'],
      default: 'new',
      index: true
    }
  },
  {
    timestamps: true
  }
)

export default mongoose.models.FreeQuote ||
  mongoose.model('FreeQuote', FreeQuoteSchema)
