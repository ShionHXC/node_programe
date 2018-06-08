const fs = require("fs")

function getExtension(pathName, callback){
    fs.readFile("mime.json",(err,json) => {
        if(err){
            console.log("获取文件失败")
            return 
        }
        const extentsion = JSON.parse(json.toString())[pathName] || "text/html"
        callback(extentsion)
    })
}

module.exports = getExtension