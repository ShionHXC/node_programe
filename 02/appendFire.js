// 追加文件
// 如果文件不存在 创建文件并且写入内容
// 如果文件存在，则追加写入内容， 不会覆盖原来的内容
var fs = require("fs")
fs.appendFile("log.txt", "日志1\n", err => {
    if (err) {
        console.log(err)
        return
    }
    console.log("创建文件成功")
})