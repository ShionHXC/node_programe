var fs = require("fs")
fs.readdir("test",(err, files) => {
    if(err){
        console.log(err)
        return
    }
    console.log(files)
})