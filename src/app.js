const express = require("express")
const morgan = require("morgan")

const app = express()

//using morgan as middleware - logger
app.use(morgan("dev"))

app.set("view engine", "ejs")

app.post('/api/auth/register', (req,res)=>{
  res.status(201).json({
    message: "User registered successfully !"
  })
})

app.get('/',(req, res)=>{
  res.render("index", {message: [
    "hi",
    "hello",
    "hui"
  ]})
})

module.exports = app