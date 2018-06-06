// 检测文件还是目录
var fs = require("fs")
fs.stat("test",(err, stats) => {
    if(err){
        console.log(err)
        return 
    }
    console.log("文件" + stats.isFile())
    console.log("目录" + stats.isDirectory())
})