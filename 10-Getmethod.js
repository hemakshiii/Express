const express =require('express')
const app=express()
const {people}= require("./data")

app.get('/api/people',(req,res)=>{
res.status(200).send({sucess:true, data:people})
})
app.listen(5000,()=>{
    console.log("server is listening at port 5000")
})