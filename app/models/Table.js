const mongoose= require("mongoose");

const TableSchema= new mongoose.Schema({
  
    client: String,
    date: {
        type:Date,
        default: Date.now()
    },
    employ: String,
    tableNumber: Number,
    order:[{   
    }],
    timeFinal: Number,
    status: {
        type: String,
        required: true,
        enum: ['En cocina','Preparando','Oden lista', 'Orden entregada']
    },

})

const Table= mongoose.model('Table', TableSchema);
module.exports= Table;