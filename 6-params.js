
//params
const express = require('express')
const { products } = require('./data')
const app= express()


app.get('/',(req,res)=>{
    res.send('<h1>Welcome to our Store</h1> <a href="/api/products/">products</a>')
})


app.get('/api/products',(req,res)=>{
    const newProducts =products.map((product)=>{
    const {id, name, price}=product
    return {id, name, price}
    })
    res.json(newProducts)
})


//route params
app.get('/api/products/:productID',(req,res)=>{
    const {productID}=req.params

    const singleProduct = products.find(
        (product)=>product.id==Number(productID)
    )
    if(!singleProduct){
        return res.status(404).send('Product not exist')
    }
    res.json(singleProduct)
})
app.get('/api/products/:productID/reviews/:reviewID',(req,res)=>{
    console.log(req.params)
    res.send("helo world")
})

app.listen(5000,()=>{
    console.log("server is listening at local host port 5000")
})