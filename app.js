// Requires
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

// Inicializar variables
var app = express();

// Body Parser
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

//parse aplication/json
app.use(bodyParser.json());

// Importaciones
var appRoutes = require('./routes/app');
var usuarioRoutes = require('./routes/usuario');

// Coneccion a la base de datos
mongoose.connection.openUri('mongodb://localhost:27017/hospitalDB', (err, res) => {

    if (err) throw err;

    console.log("base de datos online");
});


//Declaracion de rutas
app.use('/usuario', usuarioRoutes);
app.use('/', appRoutes);



app.listen(3000, () => {
    console.log("Servidor Corriendo desde el puerto: 3000");
});