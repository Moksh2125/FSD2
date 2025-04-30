var express = require('express')
var app = express()
app.get('/sem/:no/branch/:branch', (req, res) => {
    res.send(req.params);
})
app.listen(5001)