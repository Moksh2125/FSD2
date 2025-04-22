const express = require('express')
const app = express();

const myData = {
    "name": "John Doe",
    "age": 200,
    "isEmployed": true,
    "address": {
      "street": "123 Main St",
      "city": "New York",
      "zipCode": "10001"
    },
    "phoneNumbers": [
      {
        "type": "home",
        "number": "555-1234"
      },
      {
        "type": "work",
        "number": "555-5678"
      }
    ],
    "hobbies": ["reading", "traveling", "swimming"]
  };
  

// Three ways to display a Json object on page.

app.get("/", (req, res) => {
    res.set("content-type", "application/json")
    res.write(myData.age +"")
    res.send();
})
app.get("/second", (req, res) => {
    res.send(myData.age);
})
app.get("/third", (req, res) => {
    res.json(myData.age);
})
app.get("/forth", (req, res) => {
    res.status(200).send('Error 404')
})

app.listen(7002)