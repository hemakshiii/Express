//Example how to navigate website

const http = require('http')

const {readFileSync}=require('fs')
const homePage=readFileSync("./store/practice.html")
const homeStyle=readFileSync("./store/style.css")


const server=http.createServer((req,res)=>{
   
    const url=req.url;

    //homepage
    if(url === '/')
    {
        res.writeHead(200,{'content-type':'text/html'})
        res.write('<h1>Home Page</h1>')
        res.end(homePage)
    }

    //homestyle
    else if(url === '/style.css')
    {
        res.writeHead(200,{'content-type':'text/css'})
        res.write(homeStyle)
        res.end()
    }
   
    else if(url === '/about')
    {
        res.writeHead(200,{'content-type':'text/html'})
        res.write('<h1>About Page</h1>')
        res.end()
    }
    else{
        res.writeHead(404,{'content-type':'text/html'})
        res.write('<h1>Error Page not found</h1>')
        res.end()
    }
})

server.listen(5000)