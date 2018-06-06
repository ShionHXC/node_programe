var fs = require("fs")
// 创建目录
fs.mkdir("test",(err) => {
    if(err){
        console.log(err)
        return
    }
    console.log("创建目录成功")
})