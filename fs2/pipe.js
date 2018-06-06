const fs = require("fs")
const readStream = fs.createReadStream("input.txt")
const writeStream = fs.createWriteStream("output.txt")

readStream.pipe(writeStream)

console.log("操作执行完成")