const express = require('express')
const app = express();
app.get('/', (req, res) => {
    res.set("content-type", "text/html");
    res.write("<h1>Welcome to my page</h1>");
    res.send();
})
app.get("/about", (req, res) => {
    res.send("<h3>About Page</h3><a href = '/'>Home</a>");
} )
app.get('/Pic', (req, res) => {
    res.send("<img src='img_girl.jpg' alt='Girl in a jacket' width='500' height='600'>")
})
app.listen(8008)