const express = require('express')
const { products } = require('./data')
const app= express()


app.get('/',(req,res)=>{
    res.send(products)
    res.json()

})

app.listen(5000,()=>{
    console.log("server is start listening at port 5000")
})