var http = require("http")
var url = require("url")

/* 
    url.parse() 

*/
http.createServer(function (req, res) {
    if(req.url !== "/favicon.ico"){
        // parse 有两个参数  第一个为 URL ， 第二个参数为true时，query 得到参数对象
        console.log(url.parse(req.url,true).query)
    }
    res.writeHead(200, { "Content-Type": "text/html;charset=utf-8" });
    res.write("http模块1");
    
    res.end()
}).listen("8081")