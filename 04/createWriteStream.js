const fs = require("fs")

const data = "从createWriteStream传入的数据\n"

const writeStream = fs.createWriteStream("output.txt")
for(var i = 0; i<100; i++){
    writeStream.write(data,'utf8')
}

writeStream.end()
writeStream.on("finish", () => {
    console.log("写入完成")
})

writeStream.on("error", () => {
    console.log("失败")
})