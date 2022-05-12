const express = require('express');
const chalk  = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');

const app = express();
const port = 3000;

app.use(morgan('combined'));

app.get("/",(req,res) =>{
    //res.send("Hello BorntoDev Co., Ltd");
    res.render('index',{username: 'Art', customers: ["Chalothorn111","Chalothorn","Chalo"]});
})

app.listen(port, ()=>{
    debug("Listening on port" + chalk.green(" : "+port));
})