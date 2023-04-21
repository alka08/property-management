const express = require("express");
const mongoose = require("mongoose");
const { ObjectId } = require('mongodb');
const app = express();
const User = require("./User");
const cors = require('cors');
var nodemailer = require('nodemailer');
const bcrypt = require('bcrypt');
const Propertie = require('./Propertie')
const temp=require('./Sendmail');
app.use(cors());
const saltRounds = 10;
// Body Parser Applcation location
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Connect Data base MongoDB
mongoose.connect("mongodb://localhost:27017/PropertyManagment", {
  useNewUrlParser: "true",
});
mongoose.connection.on("error", (err) => {
  console.log("err", err);
});
mongoose.connection.on("Connected", (err, res) => {
  console.log("mongoose is connected");
});

app.get('/users', (req,res) => {
  User.find({}, function(err, data){
    if(err){
      return next(err);
    }
    res.json(data)
  });
});

// GET Route

// app.get('/users/:id', (req,res) => {
//   User.findOne({_id: new ObjectId(req.params.id)}, function(err, data){
//     if (err) {
//       return next(err);
//     }
//     res.json(data);
//   })
// });

// POST Route
app.post('/users', async (req,res) => {
  const hashedPwd = await bcrypt.hash(req.body.password, saltRounds)

  let user = new User(
    {
      username: req.body.username,
      email: req.body.email,
      phone: req.body.phone,
      password: hashedPwd,
      role: req.body.role,
      
    }
  );
  user.save( (err)=> {
    if (err) {
      console.log("err===>", err);
        return next(err);
    }
    res.json({status: true, message: "User created successfully"});
  });
});

app.post('/users/login', async (req, res)=> {
  try {
    const user = await User.findOne({ email: req.body.email });
    console.log(user.password);
    if (user) {
      const cmp = await bcrypt.compare(req.body.password, user.password);
      if (cmp) {
        //   ..... further code to maintain authentication like jwt or sessions
        res.json({message: "Auth Successful", data: user});
        console.log("auth Successful");
      } else {    
        res.json("Wrong username or password.");
      }
    } else {
      res.json("Wrong username or password.");
    }
  } catch (error) {
    console.log(error);
    res.status(500).json("Internal Server error Occured");
  }
})

// ...........................Properties Schema................
// ..............................Get Method........................

// 
app.get('/property', (req,res) => {
  Propertie.find({}, function(err, data){
    if(err){
      return next(err);
    }
    res.json(data)
  });
});

//1. Create an api to change a status.
//2. how to update data in mongoDB
// app.put('/preperty/:id' ,(req , res)=>{
//   Propertie.updateOne({_id: new ObjectId(req.params.id)},{
//          status: req.body.status
//        },(err, data)=>{
//      if (err) {
//       return next(err);
//      }
//      res.json(data);
//   })
// } )

app.get('/property/:user_id', (req,res) => {
  Propertie.find({user_id: new ObjectId(req.params.user_id)}, function(err, data){
    if(err){
      return next(err);
    }
    res.json(data)
  });
});



//..............................    Method........................

app.post('/property', async (req,res) => {
  let properties = new Propertie(
    {
      propertyname: req.body.propertyname,
      address: req.body.address,
      dimensions: req.body.dimensions,
      price: req.body.price,
      images: req.body.images,
      user_id: req.body.user_id,
      username: req.body.username,
      status: req.body.status,
      
    }
  );
  properties.save( (err)=> {
    if (err) {
      console.log("err===>", err);
        return next(err);
    }
    res.json({status: true, message: "properties created successfully"});
  });
});




// PUT Route
// app.put(`/users/:id`, (req,res) => {
//   User.updateOne({_id: new ObjectId(req.params.id)}, {
//     username: req.body.username,
//     phone: req.body.phone
//   }, function(err, data){
//     if (err) {
//       return next(err);
//     }
//     res.json(data);
//   })
// });


// DELETE Route
// app.delete(`/users/:id`, (req,res) => {
//   User.deleteOne({_id: new ObjectId(req.params.id)}, function(err, data){
//     if (err) {
//       return next(err);
//     }
//     res.json(data);
//   })
// });







app.listen(4000);
console.log("Web Server is Listening at port 4000");
