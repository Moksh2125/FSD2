const express = require('express');
const app = express();

const fun1 = (req, res, next) => {
    //res.set('content-type', 'text/html');
    res.write("Function1 executed");
    console.log("Fun1");
    next();
}

const fun2 = (req, res, next) => {
    res.write('<h3>Function2 Executed</h3>');
    next();
}

app.use('/test', fun1, fun2);

app.get('/test', (req, res)=>{
    res.write('<h2>Final</h2>');
    res.send()
})
app.listen(6001);