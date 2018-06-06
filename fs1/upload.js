var fs = require("fs")
var fileName = "upload"
fs.stat(fileName, (err, stats) => {
    if(err){
        // 不存在该文件夹， 创建该文件夹
        fs.mkdir(fileName,err => {
            if(err){
                console.log(err)
                return
            }
            console.log("创建文件夹成功")
        })
    }else{
        console.log(stats.isDirectory())
        console.log("该文件夹已经存在")
    }
})