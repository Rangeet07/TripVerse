import mongoose from 'mongoose'

const DestinationSchema =
new mongoose.Schema({

  name:{
    type:String,
    required:true
  },

  country:{
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

  bestTime:{
    type:String,
    required:true
  },

  tags:{
    type:[String],
    default:[]
  },
  featured:{
  type:Boolean,
  default:false
}

},{
  timestamps:true
})

export default
mongoose.models.Destination ||
mongoose.model(
  'Destination',
  DestinationSchema
)