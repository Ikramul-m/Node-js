const fs = require('fs')

fs.readFile('Sample.txt','utf-8',(err,data) => {
    if(err) {
        throw err
    }
    console.log(data)
})

console.log('I am first')