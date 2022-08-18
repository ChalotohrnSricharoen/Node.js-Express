const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');
const path = require('path');
const productRouter = express.Router();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(morgan('combined'));
app.use(express.static(path.join(__dirname,"/public/")));

app.set("views","./src/views");
app.set("view engine","ejs");

productRouter.route("/").get((req,res) =>{
    res.render("products" , {
        products : [
        {productTitle: 'iphone 11' , productDescription : '128Gb' , productPrice : 30000},
        {productTitle: 'iphone 12' , productDescription : '128Gb' , productPrice : 40000},
        {productTitle: 'iphone 13' , productDescription : '128Gb' , productPrice : 50000},
    ],
 });
})
productRouter.route("/1").get((req,res) =>{
    res.send("Hello 1");
})
app.use("/products",productRouter)

app.get("/",(req,res) => {
    res.render('index',{username: "Chalotohrn" , customers : ["Chalothorn","John","Demon"]});
})

app.listen(PORT, ()=>{
    debug("Listenning on port" , chalk.green(PORT));
})