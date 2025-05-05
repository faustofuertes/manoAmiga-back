const Publicacion = require('../models/Publicacion');

exports.crearPublicacion = async (req, res) => {
    try {
        let publicacion;

        publicacion = new Publicacion(req.body);

        await publicacion.save();

        res.send(publicacion);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error creando la publicacion (BACK)');
    }
}

exports.obtenerPublicacionesPorUsuario = async (req, res) => {
    try {
        const { userId } = req.params;

        if (!userId) {
            return res.status(400).json({ error: 'Falta el userId en los parámetros' });
        }

        const publicaciones = await Publicacion.find({ userId });
        res.json(publicaciones);

    } catch (error) {
        console.error(error);
        res.status(500).send('Error al obtener las publicaciones del usuario');
    }
};

exports.obtenerPublicacionesPorTrabajoYUbi = async (req, res) => {
    try {
        const { job, location } = req.query;

        const filtro = {};

        if (job) filtro.job = new RegExp(job, 'i');
        if (location) filtro.location = new RegExp(location, 'i');

        const publicaciones = await Publicacion.find(filtro);
        res.json(publicaciones);

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error obteniendo las publicaciones (BACK)');
    }
}

exports.obtenerPublicacion = async (req, res) => {
    try {

        const publicacion = await Publicacion.findById(req.params.id);

        if (publicacion) {
            res.json(publicacion);
        } else {
            res.status(404).json({ msg: 'Ese usuario no existe.' });
        }

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error buscando la publicacion (BACK)');
    }
};



