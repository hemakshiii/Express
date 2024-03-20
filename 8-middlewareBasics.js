//middleware basics
//middleware can be done using
//use refer 9-middlewareUse  vs router
//option:- our own by using [logger] in app.get
//express (static) refer 4-express-static
//third party(morgan) refer 9-middlewareUse

const express = require('express')
const app=express()

const logger=(req,res,next)=>{
    const url=req.url
    const method=req.method
    const time=new Date().getFullYear()
    console.log(method,time,url)
    next()
}


app.get('/',logger,(req,res)=>{
   res.send("Home Page")
})

app.get('/about',logger,(req,res)=>{
    res.send("About Page")
})


app.listen(5000,()=>{
    console.log("server is listening at port 5000")
})