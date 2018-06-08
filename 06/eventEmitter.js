const fs = require("fs")

function getExtension(path, EventEmitter){
    fs.readFile("mime.json",(err,json) => {
        if(err){
            console.log(err)
            return
        }
        const contentType = JSON.parse(json.toString())[path] || "text/html"
        EventEmitter.emit("getType", contentType)
    })
}

module.exports = getExtension