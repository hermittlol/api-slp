var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "hermittlol",
  password: "*******"
});

con.connect(function(err) {
  if (err) throw err;

  console.log("Connected!");

  con.query('create database test', function (err, result) {
    if (err) throw err;
    if (result) console.log(result);
    console.log("Database created");
  });

});