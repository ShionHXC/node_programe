// 删除文件夹  只能删除存在的空目录
var  fs = require("fs")
fs.rmdir("new1",err => {
    if (err) {
        console.log(err)
        return
    }
    console.log("删除文件夹成功")
})