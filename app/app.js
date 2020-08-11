const express= require('express');
const bodyParser= require('body-parser');

const Table= require('./routes/table');
const Product= require('./routes/product')
const User= require('./routes/user')

const App= express();

App.use(bodyParser.json());
App.use(bodyParser.urlencoded({extended: false}));

App.use('/table', Table)
App.use('/product', Product)
App.use('/user', User)

module.exports=App;