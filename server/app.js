const express = require('express');
const mongoose = require('mongoose');
const app = express();




require('./db/conn');

const User = require('./model/userschema');

app.use(express.json());

app.use(require('./router/auth'));

const middleware = (re,res,next) => {
    console.log('hello say');
    next();
}

// app.get('/', (req,res) => {
//     res.send('this is Home page from js');
// })

// app.get('/contact',middleware,(req,res)=>{
//     res.send('this is contact page')
// })
app.listen(5000, () => {
    console.log('server is running');
})