const express = require("express");
// const route = require("./config/routes");

const app = express();
require('./config/DB')
const route= require('./config/routes')
app.listen(2500, ()=> console.log("Server is on 2500"))
// app.use('/public', express.static('public')); 


app.set('view engine', 'ejs');
app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))



app.use(route)

