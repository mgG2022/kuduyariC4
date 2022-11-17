//Llamar las dependencias
const express = require('express');
//const { get } = require('mongoose');
const conectarBD = require('../config/db.js');
const cors = require('cors');


//app está conectada con express
const app = express();

//Configuración del puerto de conexión
const port = 5000;
//Enlazar la conexión con la base de datos
conectarBD();
app.use(cors());

app.use(express.json());
app.use('/api/administradores', require ('../routes/administrador.js'));
//para añadir otros modulos:
//app.use('/api/recetas', require ('../routes/receta.js'));
app.use('/api/historias', require ('../routes/historia.js'));



//probar servidor en una arrow function: '/' : ruta, req: request, res:respueata. mensaje para la web
app.get('/', (req, res) => {
    res.send("Bienvenido a KUDUYARÍ. Ya está configurado servidor");
});
//Mensaje cuando se inicia el servidor
app.listen(port, ()=>console.log("Está conectado al servidor por el puerto: ", port));