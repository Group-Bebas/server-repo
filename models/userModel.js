const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcryptjs')

const userSchema = new Schema({
  fname: {
    type: String,
    required: [true, 'Firstname required']
  },
  lname: String,
  email: {
    type: String,
    required: [true, 'Email required'],
    unique: true
  },
  password: {
    type: String,
    required: [true, 'password required']
  },
  loginWeb: {
    type: Number,
    default: 1
  },
  loginFb: {
    type: Number,
    default: 0
  }
})

userSchema.post('validate', doc => {
  let hash = bcrypt.hashSync(doc.password, Number(process.env.HASH_PW))
  doc.password = hash
})

const User = mongoose.model('User', userSchema)

module.exports = User