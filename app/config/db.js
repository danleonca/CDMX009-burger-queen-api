const mongoose= require('mongoose');
const CONFIG= require('./config');

module.exports={
    connection:null,
    connect: function(){
        if (this.connection) return this.connection;
        console.log(CONFIG)
        return mongoose.connect(CONFIG.DB).then(connection=>{

            this.connection=connection
            console.log('conexión a base de datos exitosa')
        }).catch(error=> console.log(error))
    }
}