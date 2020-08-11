const express= require('express');
const UserCtrl= require('../controllers/UserControllers');


const Router= express.Router();

Router.get('/', UserCtrl.index)
.post('/',  UserCtrl.create)
.get('/:key/:value', UserCtrl.find, UserCtrl.show)
.put('/:key/:value', UserCtrl.find, UserCtrl.update)
.delete('/:key/:value', UserCtrl.find, UserCtrl.remove);

module.exports= Router;