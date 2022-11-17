//declaro el modelo 
const Administrador = require('../models/Administrador.js');
//(el método lo llamo en una ruta determninada)
//función para integrar el CRUD y mostrar los admin
exports.mostrarAdministradores = async (req, res) => {
    try {
        //constante administradores espere hasta que me reponda el modelo
        //busca administradores y los trae de la estructura
        const administradores = await Administrador.find();
        res.json(administradores);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error al consultar los administradores');
    }
}

exports.agregarAdministradores = async (req, res) => {
    try {
        let administradores;
        //mandamos el cuerpo de json
        administradores = new Administrador(req.body)
        await administradores.save();
        res.send(administradores);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error al agregar los administradores');
    }
}

//función para mostrar un administrador
exports.mostrarAdministrador = async (req, res) => {
    try {
        // 
        let administradores = await Administrador.findById(req.params.id);
        //si voy a buscar por id y este no está..si el id está deja traer el administrador; si no... error
        if (!administradores) {
            res.status(404).json({ msg: "No se encuentra el administrador" })
        }
        //si el id está, muestra el administrador:
        res.send(administradores);

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error al agregar los administradores');
    }
}

//función para eliminar el administrador
exports.eliminarAdministrador = async (req, res) => {
    try {
        let administradores = await Administrador.findById(req.params.id);
        //si voy a buscar por id y este no está..si el id está deja traer el administrador; si no... error
        if (!administradores) {
            res.status(404).json({ msg: "El administrador no existe" })
            //return: para no buggear la aplicación por si le dan click varias veces
            return
        }
        //el id en mongo aparece _id
        await Administrador.findOneAndDelete({ _id: req.params.id });
        res.json({ msg: "El administrador ha sido eliminado exitosamente" });


    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error al eliminar los administradores');

    }
}

//función para actualizar administrador
exports.actualizarAdministrador = async (req, res) => {
    try {
        //vamos a buscar lo que está almacenado en estas variables
        const { nombres, apellidos, documento, correo, telefono, direccion } = req.body;
        //trae el administrador por id
        let administradores = await Administrador.findById(req.params.id);
        //validar si existe o no lo que vamos a buscar
        if (!administradores) {
            res.status(404).json({ msg: "No se puede editar, el administrador no existe" });
        }
        administradores.nombres = nombres;
        administradores.apellidos = apellidos;
        administradores.documento = documento;
        administradores.correo = correo;
        administradores.telefono = telefono;
        administradores.direccion = direccion;
        //toca esperar a que se haga conexión a las bases de datos y luego se le envian los datos por id. (new:true) que nos va a modificar los campos
        administradores = await Administrador.findByIdAndUpdate({ _id: req.params.id }, administradores, { new: true });
        //muestra el objeto
        res.json(administradores);

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error al actualizar los administradores');
    }
}

