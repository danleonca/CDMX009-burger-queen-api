const mongoose= require("mongoose");

const UserSchema= new mongoose.Schema({
  
    name: String,
    email: String,
    passwword: String,
    role: {
        type: String,
        required: true,
        enum: ['Administrador','Cocinero','Mesero']
    },

})

const User= mongoose.model('User', UserSchema);
module.exports= User;