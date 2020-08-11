const express= require('express');
const TableCtrl= require('../controllers/TableControllers');
const Table = require('../models/Table');

const Router= express.Router();

Router.get('/', TableCtrl.index)
.post('/',  TableCtrl.create)
.get('/:key/:value', TableCtrl.find, TableCtrl.show)
.put('/:key/:value', TableCtrl.find, TableCtrl.update)
.delete('/:key/:value', TableCtrl.find, TableCtrl.remove);

module.exports= Router;