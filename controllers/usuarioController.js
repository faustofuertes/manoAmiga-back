const Usuario = require('../models/Usuario')

exports.crearUsuario = async (req, res) => {
    try {
        let usuario;

        usuario = new Usuario(req.body);

        await usuario.save();

        res.send(usuario);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error creando el usuario (BACK)');
    }
}

exports.obtenerUsuario = async (req, res) => {
    try {
        const { auth0Id } = req.params;

        // Validación rápida (por si no llega el param)
        if (!auth0Id) {
            return res.status(400).json({ msg: 'Falta el parámetro auth0Id' });
        }

        const usuario = await Usuario.findOne({ auth0Id });

        if (usuario) {
            res.json(usuario);
        } else {
            res.status(404).json({ msg: 'Ese usuario no existe.' });
        }

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error buscando el usuario (BACK)');
    }
};

exports.actualizarUsuario = async (req, res) => {
    try {

        const {
            name,
            email,
            phone,
            isActive
        } = req.body;

        let usuario = await Usuario.findOne({ auth0Id: req.params.auth0Id });



        if (usuario) {

            usuario.name = name;
            usuario.name = email;
            usuario.isActive = phone;
            usuario.phone = isActive;

            usuario = await Usuario.findOneAndUpdate({ auth0Id: req.params.auth0Id }, usuario, { new: true });
            res.json(usuario);

        } else {
            res.satus(404).json({ msg: 'Ese usuario no existe.' })
        }

    } catch (error) {
        console.log(error)
        res.satus(500).send('Hubo un error actualizando el usuario (BACK)')
    }
}

exports.eliminarUsuario = async (req, res) => {
    try {

        let usuario = await Usuario.findOne({ auth0Id: req.params.auth0Id });

        if (usuario) {

            await Usuario.findOneAndDelete({ _id: req.params.id })
            res.json({ msg: 'Producto eliminado con exito.' });

        } else {
            res.satus(404).json({ msg: 'Ese usuario no existe.' })
        }

    } catch (error) {
        console.log(error)
        res.satus(500).send('Hubo un error actualizando el usuario (BACK)')
    }
}