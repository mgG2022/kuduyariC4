//vamos a utilizar mongoose
const mongoose = require('mongoose');

//Este modelo dede ser igual al esquema de la base de datos
//Crear el esquema para el administrador con mongoose
const administradorSchema = mongoose.Schema({
    //parémetros de la base de datos
    nombres: {
        type: String,
        required: true //nombres siempre son requeridos
    },
    apellidos: {
        type: String,
        required: true        
    },
    documento: {
        type: Number,
        required: true        
    },
    correo: {
        type: String,
        required: true        
    },
    telefono: {
        type: Number,
        required: true        
    },
    direccion: {
        type: String,
        required: true        
    }
//Al armar la estructura del backend, se lanza desde postman. Para que no se muestre la versionkey o una version

}, {versionkey:false});

//se necesita exportar porque es necesarion en el controller
module.exports = mongoose.model('Administrador', administradorSchema);