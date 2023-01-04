
var express = require('express');
var router = express.Router();
var db=require("../conexion/conexion")

/* seccion servicios , (servicios.ejs) */

router.get('/', function(req, res, next) {

    db.query("SELECT * FROM tblproductos",function(err,resultados){

        console.log(resultados)

        res.render('servicios', { title: 'Nuestros servicios...', Libros:resultados });

    } );


  }); 


module.exports = router;



  