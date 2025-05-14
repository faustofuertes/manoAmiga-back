const Publicacion = require('../models/Publicacion');

//crea una publicacion nueva
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

//trae todas las publicaciones de un usuario especifico
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

//trae todas las publicaciones de una ubicacion y trabajo especifo
exports.obtenerPublicacionesPorTrabajoYUbi = async (req, res) => {
    try {
        const { job, location } = req.query;

        const filtro = { isActive: true };

        if (job) filtro.job = new RegExp(job, 'i');
        if (location) filtro.location = new RegExp(location, 'i');

        const publicaciones = await Publicacion.find(filtro);
        res.json(publicaciones);

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error obteniendo las publicaciones (BACK)');
    }
};

//trae una publicacion especifica por ID
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

//actualiza una publicacion
exports.actualizarPublicacion = async (req, res) => {
    try {

        const {
            userName,
            job,
            location,
            phone,
            description,
            schedule,
            pricing,
            experience,
            isActive
        } = req.body;

        let publicacion = await Publicacion.findById(req.params.id);



        if (publicacion) {

            publicacion.userName = userName;
            publicacion.job = job;
            publicacion.location = location;
            publicacion.phone = phone;
            publicacion.description = description;
            publicacion.schedule = schedule;
            publicacion.pricing = pricing;
            publicacion.experience = experience;
            publicacion.isActive = isActive;

            publicacion = await Publicacion.findOneAndUpdate({ _id: req.params.id }, publicacion, { new: true });
            res.json(publicacion);

        } else {
            res.satus(404).json({ msg: 'Esa publicacion no existe.' })
        }

    } catch (error) {
        console.log(error)
        res.satus(500).send('Hubo un error actualizando la publicacion (BACK)')
    }
}

//elimina una publicacion
exports.eliminarPublicacion = async (req, res) => {
    try {

        let publicacion = await Publicacion.findById(req.params.id);



        if (publicacion) {

            publicacion = await Publicacion.findOneAndDelete({ _id: req.params.id });
            res.json(publicacion);

        } else {
            res.satus(404).json({ msg: 'Esa publicacion no existe.' })
        }

    } catch (error) {
        console.log(error)
        res.satus(500).send('Hubo un error elimiando la publicacion (BACK)')
    }
}

//trae TODAS las publicaciones que esten inactivas
exports.obtenerPublicacionesInactivas = async (req, res) => {
    try {
        const publicaciones = await Publicacion.find({ isActive: false });
        res.json(publicaciones);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al obtener las publicaciones inactivas');
    }
};

//trae UNA SOLA publicacion inactiva
exports.obtenerUnaPublicacionInactiva = async (req, res) => {
    try {
        const publicacion = await Publicacion.findOne({ isActive: false });

        if (!publicacion) {
            return res.status(404).json({ mensaje: 'No hay publicaciones inactivas.' });
        }

        res.json(publicacion);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al obtener la publicación inactiva.');
    }
};

//trae la cantidad de publicaciones inacativas que hay
exports.contarPublicacionesInactivas = async (req, res) => {
    try {
        const cantidad = await Publicacion.countDocuments({ isActive: false });
        res.json({ cantidad });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al contar publicaciones inactivas' });
    }
};

//trae TODAS las publicaciones activas
exports.obtenerPublicacionesActivas = async (req, res) => {
    try {
        const publicaciones = await Publicacion.find({ isActive: true });
        res.json(publicaciones);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al obtener las publicaciones inactivas');
    }
};