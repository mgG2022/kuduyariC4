//vamos a utilizar mongoose
const mongoose = require('mongoose');

//Este modelo dede ser igual al esquema de la base de datos
//Crear el esquema para la historia con mongoose
const historiaSchema = mongoose.Schema({
    //parémetros de la base de datos
    titulo: {
        type: String,
        required: true // siempre  requerido
    },
    argumento: {
        type: String,
        required: true        
    },
    personajes: {
        type: String,
        required: true        
    },
    relacionG: { // relación con la gastronomía
        type: String,
        required: true        
    }
//Al armar la estructura del backend, se lanza desde postman. Para que no se muestre la versionkey o una version

}, {versionkey:false});

//se necesita exportar porque es necesarion en el controller
module.exports = mongoose.model('Historia', historiaSchema);