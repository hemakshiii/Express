const express = require('express')
const router=express.Router()

//login
router.post('/',(req,res)=>{
    const {name}=req.body
    if(name){
        res.status(200).send(`Welcome to our page ${name}`)
    }
    res.status(401).send('Please enter credentials')
})

module.exports=router