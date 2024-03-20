
//Post method using html eg
const express =require('express')
const app=express()
const {people}= require("./data")

//static assests
app.use(express.static('./method-public'))

app.use(express.urlencoded({extended:true}))
app.get('/api/people',(req,res)=>{
res.status(200).send({sucess:true, data:people})
})



app.post('/login',(req,res)=>{
    const {name}=req.body
    if(name){
        res.status(200).send(`Welcome to our page ${name}`)
    }
    res.status(401).send('Please enter credentials')
})

app.listen(5000,()=>{
    console.log("server is listening at port 5000")
})