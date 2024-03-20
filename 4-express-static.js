const express = require('express')
const path =require('path')

const app =express()
 
app.use(express.static('./public'))
// app.get('/',(req,res)=>{
// res.sendFile(path.resolve(__dirname,'./store/index.html'))
// })

app.all('*',(req,res)=>{
    res.status(404).send('Resource not found')
})

app.listen(5000,()=>{
    console.log("Server is listening at port 5000")
})