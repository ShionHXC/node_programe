const http = require("http")
const fs = require("fs")
const path = require("path")
const url = require("url")
const getExtension = require("./eventEmitter.js")
const events = require("events")
const EventEmitter = new events.EventEmitter()
const app = http.createServer(function (req, res) {
    let pathName = url.parse(req.url).pathname
    if (pathName === "/") {
        pathName = "/index.html"
    }
    if (pathName !== "/favicon.ico") {
        fs.readFile("static" + pathName, (err, data) => {
            if (err) {
                // 没有这个文件
                fs.readFile("static/404.html", (err, data404) => {
                    if (err) {
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
            getExtension(path.extname(pathName), EventEmitter)
            EventEmitter.on("getType", function (contentType){
                res.writeHead(200, { "Content-Type": `${contentType};charset=utf-8` });
                // res.write(data)
                res.end(data)
            })
        })
    }

})
app.listen("8081")
