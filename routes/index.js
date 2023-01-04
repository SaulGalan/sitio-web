var express = require('express');
var router = express.Router();

/* GET home page, (index.ejs) */

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Inicio' });
});

/* seccion nosotros , (nosotros.ejs) */

router.get('/nosotros', function(req, res, next) {
  res.render('nosotros', { title: 'Quien somos..' });
});



module.exports = router;
