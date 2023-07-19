const http = require('http')

const server = http.createServer((req,res)=>{
    
    res.end("<h1>Hello World</h1>")
})

const PORT = 8080;

server.listen(PORT,()=> console.log(`Started Server`))