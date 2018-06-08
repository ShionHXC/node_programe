// 删除文件
var fs = require("fs")
fs.unlink("new/bbb.js", err => {
    if (err) {
        console.log(err)
        return
    }
    console.log("删除文件成功")
})