const http = require('http')

const server = http.createServer((req,res)=>{
    if(req === '/'){
        // res.writeHead(200, {"Context-Type":""})
        res.end("<h1>Hello World</h1>")
    }else if(req === "/about"){
        res.end(`<h1>About</h1>`)
    }
})

const PORT = 8080;

server.listen(PORT,()=> console.log(`Started Server`))