const express = require("express");
 
// Routes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const Routes = express.Router();
 
// This will help us connect to the database
const dbo = require("../db/conn");
 
// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;
 
 
// This section will help you get a list of all the Produtos.
Routes.route("/").get(function (req, res) {
 let db_connect = dbo.getDb("vocemaisintima");
 db_connect
   .collection("Produtos")
   .find({})
   .toArray(function (err, result) {
     if (err) throw err;
     res.json(result);
   });
});

Routes.route("/calcinhas").get(function (req, res) {
  let db_connect = dbo.getDb("vocemaisintima");
  db_connect
    .collection("Produtos")
    .find({"categoria":"calcinhas"})
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });
 });

 Routes.route("/conjuntos").get(function (req, res) {
  let db_connect = dbo.getDb("vocemaisintima");
  db_connect
    .collection("Produtos")
    .find({"categoria":"conjuntos"})
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });
 });

 Routes.route("/sutias").get(function (req, res) {
  let db_connect = dbo.getDb("vocemaisintima");
  db_connect
    .collection("Produtos")
    .find({"categoria":"sutiãs"})
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });
 });

 Routes.route("/babydolls").get(function (req, res) {
  let db_connect = dbo.getDb("vocemaisintima");
  db_connect
    .collection("Produtos")
    .find({"categoria":"babydolls"})
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });
 });

 Routes.route("/biquinis").get(function (req, res) {
  let db_connect = dbo.getDb("vocemaisintima");
  db_connect
    .collection("Produtos")
    .find({"categoria":"biquinis"})
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });
 });
 
// This section will help you get a single record by id
/*Routes.route("/record/:id").get(function (req, res) {
 let db_connect = dbo.getDb();
 let myquery = { _id: ObjectId( req.params.id )};
 db_connect
     .collection("Produtos")
     .findOne(myquery, function (err, result) {
       if (err) throw err;
       res.json(result);
     });
});


 
// This section will help you create a new record.
Routes.route("/record/add").post(function (req, response) {
 let db_connect = dbo.getDb();
 let myobj = {
   name: req.body.name,
   position: req.body.position,
   level: req.body.level,
 };
 db_connect.collection("Produtos").insertOne(myobj, function (err, res) {
   if (err) throw err;
   response.json(res);
 });
});
 
// This section will help you update a record by id.
Routes.route("/update/:id").post(function (req, response) {
 let db_connect = dbo.getDb(); 
 let myquery = { _id: ObjectId( req.params.id )}; 
 let newvalues = {   
   $set: {     
     name: req.body.name,    
     position: req.body.position,     
     level: req.body.level,   
   }, 
  }
});
 
// This section will help you delete a record
Routes.route("/:id").delete((req, response) => {
 let db_connect = dbo.getDb();
 let myquery = { _id: ObjectId( req.params.id )};
 db_connect.collection("Produtos").deleteOne(myquery, function (err, obj) {
   if (err) throw err;
   console.log("1 document deleted");
   response.json(obj);
 });
});*/
 
module.exports = Routes;