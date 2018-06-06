// 创建写入文件
// 如果文件不存在 创建文件 并且写入文本内容
// 如果文件存在 会覆盖文件和 写入内容

var fs = require("fs")
fs.writeFile("log.text","日志1",err => {
    if(err){
        console.log(err)
        return
    }
    console.log("创建文件成功")
})