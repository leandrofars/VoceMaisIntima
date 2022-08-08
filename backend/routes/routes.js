const express = require("express");
const Routes = express.Router();
const dbo = require("../db/conn");
const bcrypt=require("bcrypt")
const jwt = require("jsonwebtoken");
const ObjectId = require("mongodb").ObjectId;
 
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
//----------------------sigin e signup-------------------------
 Routes.route("/signup").post( async (req, res) => {
  const { name, email, password, confirmpassword } = req.body;
  if (!name) {
    return res.status(422).json({ msg: "O nome é obrigatório!" });
  }
  if (!email) {
    return res.status(422).json({ msg: "O email é obrigatório!" });
  }
  if (!password) {
    return res.status(422).json({ msg: "A senha é obrigatória!" });
  }
  if (password != confirmpassword) {
    return res
      .status(422)
      .json({ msg: "A senha e a confirmação precisam ser iguais!" });
  }
  let db_connect = dbo.getDb("vocemaisintima");
  const userExists = await db_connect.collection("Users").findOne({ email: email });
  if (userExists){
  console.log("usuário já existe")
  return res.status(422).json({ msg: "Por favor, utilize outro e-mail!" });
  }else{
    const salt = await bcrypt.genSalt(12);
    const passwordHash = await bcrypt.hash(password, salt);
    const user ={
      name:name,
      email:email,
      password:passwordHash
    }
    await db_connect.collection("Users").insertOne(user)
    console.log("usuário criado com sucesso")
    return res.status(201).json({ msg: "Usuário criado com sucesso" });
  }
});

Routes.route("/signin").post( async (req, res) => {
  const { email, password } = req.body;
  if (!email) {
    return res.status(422).json({ msg: "O email é obrigatório!" });
  }
  if (!password) {
    return res.status(422).json({ msg: "A senha é obrigatória!" });
  }
  let db_connect = dbo.getDb("vocemaisintima");
  const user = await db_connect.collection("Users").findOne({ email: email });
  if (!user) {
    return res.status(404).json({ msg: "Usuário não encontrado!" });
  }
  const checkPassword = await bcrypt.compare(password, user.password);
  if (!checkPassword) {
    return res.status(422).json({ msg: "Senha inválida" });
  }
  try {
    const secret = process.env.ACCESS_TOKEN_SECRET;
    const token = jwt.sign(
      {
        id: user._id,
      },
      secret
    );
    res.status(200).json({ msg: "Autenticação realizada com sucesso!", token });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
});

Routes.route("/admin").get(checkToken, async (req, res) =>{
  const id = req.params.id;
  let db_connect = dbo.getDb("vocemaisintima");
  const user = await db_connect.collection("Users").find({_id: ObjectId( id )});
  if (!user) {
    return res.status(404).json({ msg: "Usuário não encontrado!" });
  }
  res.status(200).json({ user });
});

function checkToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (!token) return res.status(401).json({ msg: "Acesso negado!" });
  try {
    const secret = process.env.ACCESS_TOKEN_SECRET;
    jwt.verify(token, secret);
    next();
  } catch (err) {
    res.status(400).json({ msg: "O Token é inválido!" });
  }
}
//-------------------------------------------------------
 
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