const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const ProfileSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref:'user'
  },
  // handle: {
  //   type:String,
  //   required:true,
  //   max:40
  // },
  location: {
    type:String
  },
  company: {
    type:String,
  },
  website: {
    type:String
  },
  status: {
    type:String,
    required:true
  },
  skills: {
    type: [String],
    required:true
  },
  bio: {
    type:String
  },
  githubusername: {
    type:String
  },
  experience:[{
    title: {
      type:String,
      required:true
    },
    company: {
      type:String,
      required:true
    },
    location: {
      type:String
    },
    from: {
      type:Date,
      required:true
    },
    to: {
      type:Date
    },
    current: {
      type:Boolean,
      default:false
    },
    description: {
      type:String
    }
  }],
  education:[{
    school: {
      type:String,
      required:true
    },
    degree: {
      type:String,
      required:true
    },
    field: {
      type:String,
      required:true
    },
    from: {
      type:Date,
      required:true
    },
    to: {
      type:Date
    },
    current: {
      type:Boolean,
      default:false
    },
    description: {
      type:String
    },
  }],
  social: {
    facebook:{
      type:String
    },
    twitter:{
      type:String
    },
    linkedin:{
      type:String
    },
    instagram:{
      type:String
    },
    youtube:{
      type:String
    }
  },
  date: {
    type:Date,
    default: Date.now
  }
});

module.exports = Profile = mongoose.model('profile', ProfileSchema);