const express = require('express')
const app = express();
const path = require('path')
const sp = path.join(__dirname,'../');
app.use(express.static(sp,{index : 'm3.html'}));
app.listen(8001)