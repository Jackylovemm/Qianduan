const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
 
 userAccount:{type:String,required:true},
 passWord:{type:String,required:true}
})

module.exports = mongoose.model('User',userSchema)