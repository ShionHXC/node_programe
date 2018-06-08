const fs = require("fs")
const readStream = fs.createReadStream("input.txt")


let count = 0
let str = ""
readStream.on("data",chunk => {
    str += chunk
    count++
})

readStream.on("end",() => {
    console.log(str)
    console.log(count)
})

readStream.on("error", (err) => {
    console.log(err)
})