const express = require('express');
const db = require('../mongodb/conn');
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });
// const Tour = require('./../models/userModel');

const mongoose = require('mongoose');
const path = require('path');
const User = require('./../models/userModel');
//port 
const port = process.env.PORT;
//launching express app
const app = express();


app.use(express.static('public'));
app.use(express.urlencoded({extended:false}));
app.get('/', (req, res) => {
    res.render('index');
});
app.post('/contact',async (req,res)=>{
    try{
        const userData = new User(req.body);
        await userData.save();
        res.status(201).send(`<h1>Thanks! Cheers...</h1>\n<a href="./">Click here to go back </a>`);
        
    } catch(err){
        res.status(500).send(err);
        console.log(err);
    }
})

app.listen(port, ()=>{
    console.log(`listening on port ${port}`);
});