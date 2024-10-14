const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const UsersModel = require("./models/users")
app.use(express.json());
app.use(cors());
mongoose.connect("mongodb://127.0.0.1:27017/inmate");
app.post('/login',(req,res)=>{
    const {email, password} = req.body;
    UsersModel.findOne({email:email}).then( user =>{
        if(user){
            if(user.password===password){
                res.json("Success");
            }
            else{
                res.json("The password is incorrect");
            }
        }
        else{
            res.json("User not found.Create New User");
        }
    })
})
app.post('/signuppage',(req,res)=>{
    console.log("post called");
    UsersModel.create(req.body)
    .then(users=>res.json(users))
    .catch(err=>res.json(err))
})

app.listen(3001, ()=>{ console.log("server is running")})