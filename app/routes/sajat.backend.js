const { authJwt } = require("../middleware");
const controller = require("../controllers/user.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  //Saját backend végpontok

  
const fileupload = require("express-fileupload");

app.use(fileupload());
  app.post("/upload", (req, res) => {
    const newpath = "./kepek/";
    const file = req.files.file;
    const filename = file.name;
  
    file.mv(`${newpath}${filename}`, (err) => {
      if (err) {
        return res.status(500).send({ message: "File upload failed", code: 200 });
      }
        return res.status(200).send({ message: "File Uploaded", code: 200 });
    });
  });




app.get('/Mell', (req, res) => {

    var mysql = require('mysql')
    var connection = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'zarodolgozat'
    })
    
    connection.connect()
    
    connection.query('SELECT * from izomcsoport_kepek WHERE izomcsoportok_id=1', function (err, rows, fields) {
      if (err) throw err
    
      console.log(rows)
      res.send(rows)
    })
    
    connection.end()
  
  })


 
  app.get('/Bicepsz', (req, res) => {

    var mysql = require('mysql')
    var connection = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'zarodolgozat'
    })
    
    connection.connect()
    
    connection.query('SELECT * from izomcsoport_kepek WHERE izomcsoportok_id=2', function (err, rows, fields) {
      if (err) throw err
    
      console.log(rows)
      res.send(rows)
    })
    
    connection.end()
  
  })


 
  app.get('/Tricepsz', (req, res) => {

    var mysql = require('mysql')
    var connection = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'zarodolgozat'
    })
    
    connection.connect()
    
    connection.query('SELECT * from izomcsoport_kepek WHERE izomcsoportok_id=3', function (err, rows, fields) {
      if (err) throw err
    
      console.log(rows)
      res.send(rows)
    })
    
    connection.end()
  
  })


  
app.get('/Vall', (req, res) => {

  var mysql = require('mysql')
  var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'zarodolgozat'
  })
  
  connection.connect()
  
  connection.query('SELECT * from izomcsoport_kepek WHERE izomcsoportok_id=4', function (err, rows, fields) {
    if (err) throw err
  
    console.log(rows)
    res.send(rows)
  })
  
  connection.end()

})

  

  app.get('/Hat', (req, res) => {

    var mysql = require('mysql')
    var connection = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'zarodolgozat'
    })
    
    connection.connect()
    
    connection.query('SELECT * from izomcsoport_kepek WHERE izomcsoportok_id=5', function (err, rows, fields) {
      if (err) throw err
    
      console.log(rows)
      res.send(rows)
    })
    
    connection.end()
  
  })

  


app.get('/HasTorzs', (req, res) => {

  var mysql = require('mysql')
  var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'zarodolgozat'
  })
  
  connection.connect()
  
  connection.query('SELECT * from izomcsoport_kepek WHERE izomcsoportok_id=6', function (err, rows, fields) {
    if (err) throw err
  
    console.log(rows)
    res.send(rows)
  })
  
  connection.end()

})



app.get('/Vadli', (req, res) => {

  var mysql = require('mysql')
  var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'zarodolgozat'
  })
  
  connection.connect()
  
  connection.query('SELECT * from izomcsoport_kepek WHERE izomcsoportok_id=7', function (err, rows, fields) {
    if (err) throw err
  
    console.log(rows)
    res.send(rows)
  })
  
  connection.end()

})


app.get('/CombFar', (req, res) => {

  var mysql = require('mysql')
  var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'zarodolgozat'
  })
  
  connection.connect()
  
  connection.query('SELECT * from izomcsoport_kepek WHERE izomcsoportok_id=8', function (err, rows, fields) {
    if (err) throw err
  
    console.log(rows)
    res.send(rows)
  })
  
  connection.end()

})


app.get('/Alkar', (req, res) => {

  var mysql = require('mysql')
  var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'zarodolgozat'
  })
  
  connection.connect()
  
  connection.query('SELECT * from izomcsoport_kepek WHERE izomcsoportok_id=9', function (err, rows, fields) {
    if (err) throw err
  
    console.log(rows)
    res.send(rows)
  })
  
  connection.end()

})





app.get('/izomcsoportok', (req, res) => {

  var mysql = require('mysql')
  var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'zarodolgozat'
  })
  
  connection.connect()
  
  connection.query('SELECT * from izomcsoportok', function (err, rows, fields) {
    if (err) throw err
  
    console.log(rows)
    res.send(rows)
  })
  
  connection.end()

})


app.get('/taplalekkiegeszitok', (req, res) => {

  var mysql = require('mysql')
  var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'zarodolgozat'
  })
  
  connection.connect()
  
  connection.query('SELECT kiegeszitok_nev, kiegeszitok_leiras FROM kiegeszitok ORDER BY etrend_id ASC;', function (err, rows, fields) {
    if (err) throw err
  
    console.log(rows)
    res.send(rows)
  })
  
  connection.end()

})



















app.post('/adat_felvitel', (req, res) => {
  var mysql = require('mysql')
  var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'zarodolgozat'
  })
  
  connection.connect()

  connection.query("INSERT INTO izomcsoport_kepek VALUES (NULL, '"+req.body.bevitel1+"', '"+req.body.bevitel2+"', '"+req.body.bevitel3+"');", function (err, rows, fields) {
    if (err) throw err
  
    console.log("Sikeres felvitel!")

    res.send("Sikeres felvitel!")
  })
  
  connection.end()    

})  



  
app.post('/kommentfelvitel', (req, res) => {
  var mysql = require('mysql')
  var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'zarodolgozat'
  })
  
  connection.connect()
  
  let dt=new Date();
  let teljesdat=dt.getFullYear()+"-"+  (dt.getMonth()+1)   +"-"+dt.getDate();
  connection.query("INSERT INTO uzenetek VALUES (NULL, '"+req.body.bevitel1+"', '"+req.body.bevitel2+"', '"+teljesdat+"') ", function (err, rows, fields) {
    if (err) throw err
  
    console.log("Sikeres felvitel!")

    res.send("Sikeres felvitel!")
  })
  
  connection.end()    

})  



app.post('/temalekerdez', (req, res) => {
  var mysql = require('mysql')
  var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'zarodolgozat'
  })
  
  connection.connect()
  
  connection.query('SELECT * from izomcsoportok where izomcsoport_id=' + req.body.bevitel4, function (err, rows, fields) {
    if (err) throw err
  
    console.log(rows)

    res.send(rows)
  })
  
  connection.end()    

})






app.get('/tema', (req, res) => {
  var mysql = require('mysql')
  var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'zarodolgozat'
  })
  
  connection.connect()
  
  connection.query('SELECT * from uzenetek ORDER BY uzenet_id DESC ', function (err, rows, fields) {
    if (err) throw err
  
    console.log(rows)

    res.send(rows)
  })
  
  connection.end()    

})




















app.post('/adat_torles', (req, res) => {
  var mysql = require('mysql')
  var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'zarodolgozat'
  })
  
  connection.connect()

  connection.query("DELETE FROM uzenetek WHERE uzenet_id=" +req.body.bevitel1, function (err, rows, fields) {
    if (err) throw err
  
    console.log("Sikeres törlés!")

    res.send("Sikeres törlés!")
  })
  
  connection.end()    

})  



app.post('/adat_torles_mell', (req, res) => {
  var mysql = require('mysql')
  var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'zarodolgozat'
  })
  
  connection.connect()

  connection.query("DELETE FROM izomcsoport_kepek WHERE kepek_id=" +req.body.bevitel1, function (err, rows, fields) {
    if (err) throw err
  
    console.log("Sikeres törlés!")

    res.send("Sikeres törlés!")
  })
  
  connection.end()    

})  



app.post('/adat_torles_bicepsz', (req, res) => {
  var mysql = require('mysql')
  var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'zarodolgozat'
  })
  
  connection.connect()

  connection.query("DELETE FROM izomcsoport_kepek WHERE kepek_id=" +req.body.bevitel1, function (err, rows, fields) {
    if (err) throw err
  
    console.log("Sikeres törlés!")

    res.send("Sikeres törlés!")
  })
  
  connection.end()    

})  


app.post('/adat_torles_tricepsz', (req, res) => {
  var mysql = require('mysql')
  var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'zarodolgozat'
  })
  
  connection.connect()

  connection.query("DELETE FROM izomcsoport_kepek WHERE kepek_id=" +req.body.bevitel1, function (err, rows, fields) {
    if (err) throw err
  
    console.log("Sikeres törlés!")

    res.send("Sikeres törlés!")
  })
  
  connection.end()    

})  





app.post('/adat_torles_vall', (req, res) => {
  var mysql = require('mysql')
  var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'zarodolgozat'
  })
  
  connection.connect()

  connection.query("DELETE FROM izomcsoport_kepek WHERE kepek_id=" +req.body.bevitel1, function (err, rows, fields) {
    if (err) throw err
  
    console.log("Sikeres törlés!")

    res.send("Sikeres törlés!")
  })
  
  connection.end()    

})  





app.post('/adat_torles_hat', (req, res) => {
  var mysql = require('mysql')
  var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'zarodolgozat'
  })
  
  connection.connect()

  connection.query("DELETE FROM izomcsoport_kepek WHERE kepek_id=" +req.body.bevitel1, function (err, rows, fields) {
    if (err) throw err
  
    console.log("Sikeres törlés!")

    res.send("Sikeres törlés!")
  })
  
  connection.end()    

})  




app.post('/adat_torles_hastorzs', (req, res) => {
  var mysql = require('mysql')
  var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'zarodolgozat'
  })
  
  connection.connect()

  connection.query("DELETE FROM izomcsoport_kepek WHERE kepek_id=" +req.body.bevitel1, function (err, rows, fields) {
    if (err) throw err
  
    console.log("Sikeres törlés!")

    res.send("Sikeres törlés!")
  })
  
  connection.end()    

})  





app.post('/adat_torles_vadli', (req, res) => {
  var mysql = require('mysql')
  var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'zarodolgozat'
  })
  
  connection.connect()

  connection.query("DELETE FROM izomcsoport_kepek WHERE kepek_id=" +req.body.bevitel1, function (err, rows, fields) {
    if (err) throw err
  
    console.log("Sikeres törlés!")

    res.send("Sikeres törlés!")
  })
  
  connection.end()    

})  







app.post('/adat_torles_combfar', (req, res) => {
  var mysql = require('mysql')
  var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'zarodolgozat'
  })
  
  connection.connect()

  connection.query("DELETE FROM izomcsoport_kepek WHERE kepek_id=" +req.body.bevitel1, function (err, rows, fields) {
    if (err) throw err
  
    console.log("Sikeres törlés!")

    res.send("Sikeres törlés!")
  })
  
  connection.end()    

})  






app.post('/adat_torles_alkar', (req, res) => {
  var mysql = require('mysql')
  var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'zarodolgozat'
  })
  
  connection.connect()

  connection.query("DELETE FROM izomcsoport_kepek WHERE kepek_id=" +req.body.bevitel1, function (err, rows, fields) {
    if (err) throw err
  
    console.log("Sikeres törlés!")

    res.send("Sikeres törlés!")
  })
  
  connection.end()    

})  
};


