const fs = require("fs");
fs.writeFileSync("node/data.txt","50 -2 0 3 72 -1 65 101")
data = fs.readFileSync("node/data.txt",'utf-8')
console.log(data)
arrData = data.split(" ")
sortData = arrData.sort((a,b) => a - b)
console.log(sortData)
let a = []
for(i = 0; i<sortData.length; i++){
    a[i] = parseInt(sortData[i])
}
console.log(a)