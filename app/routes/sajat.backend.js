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






app.post('/adat_felvitel', (req, res) => {
  var mysql = require('mysql')
  var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'zarodolgozat'
  })
  
  connection.connect()

  connection.query("INSERT INTO izomcsoport_kepek VALUES (NULL, 'teszt1.png', '1', '"+req.body.bevitel3+"');", function (err, rows, fields) {
    if (err) throw err
  
    console.log("Sikeres felvitel!")

    res.send("Sikeres felvitel!")
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



};


