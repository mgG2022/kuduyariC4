const Receta  = require('../models/Receta');

exports.mostrarreceta = async(req,res)=>{
    try {
        const recetas = await Receta.find();
        res.json(recetas);

    } catch (error) {
        console.log(error)
        res.status(500).send('hubo un error al consultar las recetas')
        
    }
}

exports.agregarReceta = async(req,res)=>{
    try {
        let recetas;
        recetas = new Receta (req.body)
        await recetas.save();
        res.send(recetas);

    } catch (error) {
        console.log(error)
        res.status(500).send('hubo un error al consultar las recetas')
    }
}

exports.mostrarRecetas = async(req,res)=>{
    try {
        let recetas = await Receta.findById(req.params.id);
        if(!recetas){
            res.status(404).json({msg : "No se puede mostrar la receta"})
        }
        res.send(recetas);
    } catch (error) {
        console.log(error)
        res.status(500).send('hubo un error al consultar las recetas')
    }
}

exports.eliminarRecetas = async(req,res)=>{
    try {
        let recetas = await Receta.findById(req.params.id);
        if(!recetas){
            res.status(404).json({msg : "La receta no existe"})
            return
        }
        await Receta.findByIdAndRemove({_id: req.params.id});
        res.json({msg: "La receta fue eliminada"});
    } catch (error) {
        console.log(error)
        res.status(500).send('hubo un error al consultar las recetas')
    }
}

exports.actualizarReceta = async(req,res)=>{
    try {
        const {tipo, nombre, ingredientes, preparacion, pueblo, comunidad} = req.body;
        let recetas = await Receta.findById(req.params.id);
        if(!recetas){
            res.status(404).json({msg: "el cliente no existe"})
        }

        recetas.tipo=tipo;
        recetas.nombre=nombre;
        recetas.ingredientes=ingredientes;
        recetas.preparacion=preparacion;
        recetas.pueblo=pueblo;
        recetas.comunidad=comunidad;

        clientes = await Receta.findOneAndUpdate({_id: req.params.id}, recetas,{new:true});
        res.json(recetas);

    } catch (error) {
        console.log(error)
        res.status(500).send('hubo un error al consultar las recetas en el servidor');
    }
}