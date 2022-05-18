//Inyectar dependencias.
const express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
let Person = require('../models/person.js');

//Definir una ruta donde se imprimirá el objeto json.
router.get('/persons', function(req, res, next){
    Person.find(function(err, persons){
        if(err) return next(err); //Regresa un error.
        res.json(persons); //Se regresa la información que pedimos.
    });
});

//Exportar el módulo.
module.exports = router;