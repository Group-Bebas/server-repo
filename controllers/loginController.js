const User = require('../models/userModel')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const axios = require('axios')

class LoginController {
  
  static loginWeb (req, res) {
    User.find({ email: req.body.email })
      .then(data => {
        if (data.length === 1) {
          
          if (bcrypt.compareSync(req.body.password, data[0].password)) {
            let token = jwt.sign({
              fname: data[0].fname,
              email: data[0].email
            }, process.env.JWT_HASH)

            res.status(200).json({
              status: 'success',
              token: token
            })
          } else {
            res.status(500).json({
              status: 'failed',
              message: 'wrong email or password'
            })
          }
        } else {
          res.status(500).json({
            status: 'failed',
            message: 'wrong email or password'
          })    
        }
      })
      .catch(err => {
        res.status(500).json({
          status: 'failed',
          message: 'failed when logging your account'
        })
      })
  }

  static loginGoogle (req, res) {
    let token = req.headers.token
    axios({
      url: `https://www.googleapis.com/oauth2/v3/tokeninfo?id_token=${token}`,
      method: 'get'
    })
      .then(data => {

        User.find({
          email: data.data.email
        })
          .then(user => {
            
            if (user.length === 1) {
              const token = jwt.sign({
                fname: user[0].fname,
                email: user[0].email
              }, process.env.JWT_HASH)
  
              res.status(200).json({
                status: 'success',
                token: token
              })
            } else {

              let newData = {
                fname: data.data.given_name,
                lname: data.data.family_name,
                email: data.data.email,
                password: data.data.email
              }
              let user = new User(newData)
              user.save()
                .then(data => {
                  const token = jwt.sign({
                    fname: data.fname,
                    email: data.email
                  }, process.env.JWT_HASH)
                  res.status(200).json({
                    status: 'success',
                    token: token
                  })
                })
                .catch(err => {
                  res.status(500).json({
                    status: 'failed',
                    message: 'error when creating new data'
                  })
                })
            }
          })
          .catch(err => {
            res.status(500).json({
              status: 'failed',
              message: 'failed when sign up (internal server error)'
            })
          })
      })
      .catch(err => {
        res.status(500).json({
          status: 'failed',
          err: err.message
        })
      })

  }

}

module.exports = LoginController