
//Express Router Setup

const express =require('express')
const app=express()
const people = require('./router/people')
const auth= require('./router/auth')

//static assests
app.use(express.static('./method-public'))

//parse form  data
app.use(express.urlencoded({extended:false}))

//parse json
app.use(express.json())

app.use('/api/people',people)
app.use('/login', auth)




app.listen(5000,()=>{
    console.log("server is listening at port 5000")
})