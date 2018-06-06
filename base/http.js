var http = require("http")

http.createServer(function(req,res) {
    res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
    res.write("http模块1");
    res.write("<h1>http模块2</h1>");
    res.end()
}).listen("8081")