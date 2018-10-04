'use strict'

const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')

app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(cors())

app.get('/' , (req,res)=>{
    res.send('OK')
})

app.listen(3006, ()=>{
    console.log('You are listening to PORT 3006')
})