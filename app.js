const express = require('express');
const app = express();
const path = require('path')

app.listen(3030, ()=>{
    console.log('Servidor funcionando');
});

app.use(express.static('public'));


app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/views/home.html');
});

app.get('/login', (req,res)=>{
    res.sendFile(__dirname + '/views/login.html');
});

app.get('/register', (req,res)=>{
    res.sendFile(__dirname + '/views/register.html');
});