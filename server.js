const Database= require('./app/config/db');
const CONFIG= require('./app/config/config');
const App= require('./app/app');

Database.connect();

App.listen(CONFIG.PORT, function(error){
    if(error) return console.log(error);
    console.log(`servidor corriendo en el puerto ${CONFIG.PORT}`)
})