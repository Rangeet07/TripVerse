import mongoose from 'mongoose'

const TourSchema = new mongoose.Schema({

  title:{
    type:String,
    required:true
  },

  location:{
    type:String,
    required:true
  },

  description:{
    type:String,
    required:true
  },

images:{
  type:[String],
  required:true
},

  price:{
    type:Number,
    required:true
  },

  duration:{
    type:String,
    required:true
  },


},{
  timestamps:true
})

export default mongoose.models.Tour ||
mongoose.model('Tour',TourSchema)