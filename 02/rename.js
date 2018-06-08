// 重命名
// 可以用来 重命名  剪切文件  
// 不会创建不存在的文件夹
var fs = require("fs")
fs.rename("test/aaa.js","new/bbb.js",err => {
    if(err){
        console.log(err)
        return 
    }
    console.log("剪切并重命名成功")
})