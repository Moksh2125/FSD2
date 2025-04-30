const express = require('express')
const app = express();

app.use(express.static(__dirname, {index : 'Task3.html'}));

app.get('/calc', (req, res)=>{
    
    res.set('content-type', 'text/html');

    var num1 = parseInt(req.query.n1);
    var num2 = parseInt(req.query.n2);
    var formula = req.query.formula
    if ((num1 > 0) && (num2 > 0)) {
        if (formula == 'add') {
            res.write(`<h1> Addition is ${num1+num2}</h1>`)
        }
        else if(formula == 'sub')
        {
            res.write(`<h1> Subtraction is ${num1-num2}</h1>`)
        }
        else if(formula == 'div')
        {
            res.write(`<h1> Division is ${num1/num2}</h1>`)
        }
        else if(formula == 'mul')
        {
            res.write(`<h1> Multiplication is ${num1*num2}</h1>`)
        }
        else{
            res.write(`<h1>Please select a formula</h1>`)
        }
    }
    else{
        res.write('<h1>Not a valid Number</h1>')
    }
    res.send();
})
app.listen(6006);