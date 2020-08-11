const mongoose= require("mongoose");

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        required: true,
        enum: ['Meals','Breakfast']
    },
    
   
});


const Product= mongoose.model('Product', ProductSchema);
module.exports= Product;