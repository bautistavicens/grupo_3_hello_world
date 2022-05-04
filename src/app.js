//Express
const express = require('express');
const app = express();

//Path
const path = require('path');

//Routes
const homeRouter = require('./routes/homeRouter.js');
const productDetailRouter = require('./routes/productDetailRouter.js');

app.listen(3030, ()=>{
    console.log("Server Status: Online");
});

app.set("view engine", "ejs");

app.use(express.static("public"));

//TEST
/*app.use('/', homeRouter);*/
app.use('/producto', productDetailRouter);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "/views/home.html"))
});

app.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, "/views/home.html"))
});

app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, "/views/register.html"))
})

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, "/views/login.html"))
})

app.get('/cart', (req, res) => {
    res.sendFile(path.join(__dirname, "/views/cart.html"))
})

app.get('/productDetail', (req, res) => {
    res.sendFile(path.join(__dirname, "/views/productDetail.html"))
})