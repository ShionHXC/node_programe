// 读取文件
var fs = require("fs")
fs.readFile("log.txt",(err, data) => {
    if(err){
        console.log(err)
        return 
    }
    console.log(data)
    console.log(data.toString())
})