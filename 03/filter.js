var fs = require("fs")
var filesArr = []
fs.readdir("html", (err, files) => {
    if(err){
        console.log(err)
        return
    }else{
        
        (function filterFiles(i){
            if (i >= files.length){
                console.log(filesArr)
                return
            }
            fs.stat("html/" + files[i], (err,stats) => {
                if(err){
                    console.log(err)
                    return
                }
                if(stats.isDirectory()){
                    filesArr.push(files[i])
                }
                filterFiles(i+1)
            }) 
        })(0)
    }
})

