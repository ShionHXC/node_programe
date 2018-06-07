const http = require("http")
const fs = require("fs")
const path = require("path")
const url = require("url")
const getExtension = require("./extension.js")
const app = http.createServer(function(req,res){
    let pathName = url.parse(req.url).pathname
    if(pathName === "/"){
        pathName = "/index.html"
    }
    if (pathName!== "/favicon.ico"){
        const contentType = getExtension(path.extname(pathName))
        fs.readFile("static"+pathName,(err, data) => {
            if(err){
                // 没有这个文件
                fs.readFile("static/404.html",(err,data404) => {
                    if(err){
                        console.log(err)
                        return 
                    }
                    res.writeHead(200, { "Content-Type": `text/html;charset=utf-8` });
                    res.write(data404)
                    res.end()
                })
                console.log(err)
                return 
            }
            res.writeHead(200, { "Content-Type": `${contentType};charset=utf-8`  });
            res.write(data)
            res.end()
        })
    }
    
})
app.listen("8081")
