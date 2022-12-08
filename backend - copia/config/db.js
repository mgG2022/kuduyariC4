//Conexión a la base de datos
const mongoose = require('mongoose');
//cadena de conexión para la base de datos
//llamar la variable de entorno
require ('dotenv').config();

const conectarBD = () => {
    //Se arma la conexión con mongo y se pasa la variable de entorno
    mongoose
    .connect(process.env.MONGO_URL)
    //PROMESA
    .then(()=> console.log("Está conectado con MONGO-DB"))
    .catch((err) => console.error(err))
}
//para poder usar este módulo en otra parte del proyecto lo exportamos:
module.exports = conectarBD;