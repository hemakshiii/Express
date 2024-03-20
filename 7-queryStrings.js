
//Quer string
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


// basic eg-1 query string
// app.get('/api/v1/query',(req,res)=>{
//     res.send('hello world')
//     console.log(req.query)
// })

//eg2 query string
app.get('/api/v1/query',(req,res)=>{
    const {search,limit}=req.query
    let sortedProducts = [...products]

if(search)
{
    sortedProducts=sortedProducts.filter((product)=>{
        return product.name.startsWith(search)
    })
}
if(sortedProducts.length <1){
    // res.status(200).send('no products matched')
    return res.status(200).json({success:true, data:[]})
}

if(limit){
sortedProducts=sortedProducts.slice(0,Number(limit))
}
res.status(200).json(sortedProducts)
})


app.listen(5000,()=>{
    console.log("server is listening at local host port 5000")
})