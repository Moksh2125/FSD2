
var s  = {
    d : [
        {"name" : "Temp", "age":30},
        {"name" : "abc", "age":15},
        {"name" : "pqr", "age":20}
    ]
}
const express = require('express')
const app = express();

app.get('/', (req, res) => {
    res.set('content-type', 'text/html');
    res.write("<table border = '2'><tr><th>Name</th><th>Age</th></tr>");
    var sd = s.d.sort((a, b) => b.age - a.age);
    for(x of sd){
        res.write(`<tr><td> ${x.name}</td><td>${x.age}</td></tr>`)
    }
    res.write("</table>");
    res.send();
})
app.listen(2001);