const mongoose = require ('mongoose');

// este modelo debe ser igual al esquema de la base de datos

const recetaSchema = mongoose.Schema({

    tipo: {
        type: String,
        required: true
    },
    nombre: {
        type: String,
        required: true
    },
    ingredientes: {
        type: String,
        required: true
    },
    preparacion: {
        type: String,
        required: true
    },
    pueblo: {
        type: String,
        required: true
    },
    comunidad: {
        type: String,
        required: true
    }

},{versionkey:false});
module.exports = mongoose.model('Receta',recetaSchema);