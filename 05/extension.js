
const fs = require("fs")

function getExtension(extension){
    /* fs.readFile("mime.json", (err, json) => {
        if (err) {
            console.log('====================================');
            console.log("获取mime.json失败");
            console.log('====================================');
            return;
        }
        const extensionJson = JSON.parse(json.toString())
        const contentType = extensionJson[extension]
        console.log(contentType)
        return contentType
    }) */

    // 把读取数据改成同步
    const json = fs.readFileSync("mime.json")
    const contentType = JSON.parse(json.toString())[extension]
    return contentType || "text/html"
}

module.exports = getExtension