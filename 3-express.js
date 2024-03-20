const express = require('express')
const app = express()

app.get('/', (req, res) =>{
    console.log("Server hit the home page")
    res.status(200).send('Home Page')
})

app.get('/about', (req, res) =>{
    console.log("Server hit the home page")
    res.status(200).send('About Page')
})

app.all('*',(req,res)=>{
    res.status(404).send('page not found')
})

app.listen(5000,()=>{
    console.log('server is listening at 5000')
})
