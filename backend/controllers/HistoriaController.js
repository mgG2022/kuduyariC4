//declaro el modelo 
const Historia = require('../models/Historia.js');
//(el método lo llamo en una ruta determninada)
//función para integrar el CRUD y mostrar los admin
exports.mostrarHistorias = async (req, res) => {
    try {
        //constante historias espere hasta que me reponda el modelo
        //busca historias y los trae de la estructura
        const historias = await Historia.find();
        res.json(historias);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error al consultar las historias, mitos o leyendas relacionadas con el alimento y la tradición culinaria');
    }
}

exports.agregarHistorias = async (req, res) => {
    try {
        let historias;
        //mandamos el cuerpo de json
        historias = new Historia(req.body)
        await historias.save();
        res.send(historias);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error al agregar la historia, mito o leyenda');
    }
}

//función para mostrar una historia
exports.mostrarHistoria = async (req, res) => {
    try {
        // 
        let historias = await Historia.findById(req.params.id);
        //si voy a buscar por id y este no está..si el id está deja traer la historia; si no... error
        if (!historias) {
            res.status(404).json({ msg: "No se encuentra la historia, mito o leyenda" })
        }
        //si el id está, muestra la historia:
        res.send(historias);

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error al agregar la historia, mito o leyenda');
    }
}

//función para eliminar la historia
exports.eliminarHistoria = async (req, res) => {
    try {
        let historias = await Historia.findById(req.params.id);
        //si voy a buscar por id y este no está..si el id está deja traer el administrador; si no... error
        if (!historias) {
            res.status(404).json({ msg: "La historia, mito o leyenda no existe" })
            //return: para no buggear la aplicación por si le dan click varias veces
            return
        }
        //el id en mongo aparece _id
        await Historia.findOneAndDelete({ _id: req.params.id });
        res.json({ msg: "La historia, mito o leyenda ha sido eliminada exitosamente" });


    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error al eliminar la historia, mito o leyenda');

    }
}

//función para actualizar la historia
exports.actualizarHistoria = async (req, res) => {
    try {
        //vamos a buscar lo que está almacenado en estas variables
        const { titulo, argumento, personajes, relacionG, puebloComunidad, referente} = req.body;
        //trae el historia por id
        let historias = await Historia.findById(req.params.id);
        //validar si existe o no lo que vamos a buscar
        if (!historias) {
            res.status(404).json({ msg: "No se puede editar, la historia, mito o leyenda no existe" });
        }
        historias.titulo = titulo;
        historias.argumento = argumento;
        historias.personajes = personajes;
        historias.relacionG = relacionG;
        historias.puebloComunidad = puebloComunidad;
        historias.referente = referente;
        
        //toca esperar a que se haga conexión a las bases de datos y luego se le envian los datos por id. (new:true) que nos va a modificar los campos
        historias = await Historia.findByIdAndUpdate({ _id: req.params.id }, historias, { new: true });
        //muestra el objeto
        res.json(historias);

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error al actualizar las historias, mitos o leyendas');
    }
}

