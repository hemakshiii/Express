//middleware

const express = require('express')
const morgan = require('morgan')
const app=express()
const logger=require('./logger')
const authorize=require('./authorzie')

//middleware use function
//use method 
// app.use([logger,authorize])

//third party morgan
app.use(morgan('tiny'))

app.get('/',(req,res)=>{
   res.send("Home Page")
})

app.get('/about',(req,res)=>{
    res.send("About Page")
})

app.get('/api/products',(req,res)=>{
    res.send('Products')
})

app.get('/api/items',(req,res)=>{
    console.log(req.user)
    res.send('Items')
})
app.listen(5000,()=>{
    console.log("server is listening at port 5000")
})