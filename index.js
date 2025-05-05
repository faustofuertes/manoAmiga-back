const express = require('express');
const conectarDB = require('./config/db');
const cors = require('cors');

//creamos el servidor
const app = express();

//conectamos la BD
conectarDB();
app.use(cors());

app.use(express.json());

app.use('/api/usuarios', require('./routes/usuario'));
app.use('/api/publicaciones', require('./routes/publicaciones'));

app.listen(4000, () => {
    console.log('El servidor esta corriendo perfectamente.')
})

