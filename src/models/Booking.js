import mongoose from 'mongoose'

const BookingSchema = new mongoose.Schema({

  customerName:{
    type:String,
    required:true
  },

  email:{
    type:String,
    required:true
  },

  phone:{
    type:String,
    required:true
  },

  travelers:{
    type:Number,
    required:true
  },

  startDate:{
    type:String,
    required:true
  },

  endDate:{
    type:String,
    required:true
  },

  tourTitle:{
    type:String,
    required:true
  },

  location:{
    type:String,
    required:true
  },

  price:{
    type:Number,
    required:true
  }

},{
  timestamps:true
})

export default mongoose.models.Booking ||
mongoose.model('Booking',BookingSchema)