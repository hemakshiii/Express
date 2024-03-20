const http = require('http')

const {readFileSync}=require('fs')
const homePage=readFileSync("./index.html")
const server=http.createServer((req,res)=>{
    // console.log('user hit the server')
    // res.end('home page')
    // console.log(req.method)
    // console.log(req.url)
    const url=req.url;
    if(url === '/')
    {

        res.writeHead(200,{'content-type':'text/html'})
        res.write('<h1>Home Page</h1>')
        res.end(homePage)
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