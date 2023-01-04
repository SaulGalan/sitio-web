const mysql = require('mysql')
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'ventas'
})

connection.connect(
(err)=>{
    if(!err){console.log("Coneccion establecida"); }
    else{console.log("Coneccion fallida"); }
}

);

module.exports = connection;
/*
connection.query("SELECT * FROM tblproductos",function(err,resultados){
    console.log(resultados)
} );



connection.end()
*/