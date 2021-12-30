const express = require("express");
require("./db/connection");
const Register = require("./models/register");
const Login = require("./models/login");
const AddUser = require("./models/AddUser");
const mongoose = require("mongoose")

const app = express();
const port = process.env.PORT || 3005;
app.use(express.json());
 
app.post("/register", async(req, res) =>{
    try{
        const user = Register.create(req.body)
        res.status(200).send(user);
    } catch(e){res.status(400).send(e);}
})

app.post("/login", (req, res) =>{
    try{
        return new Promise(async() => {
          await Register.findOne({email:req.body.email,password:req.body.password}).then(user => {
                if(user){
                    res.status(200).send({status:200,message:"success",result:user});
                }else{
                    res.status(400).send({status:400,message:"failure",error:"Not found"});
                }
            })
        })

    }catch(e){res.status(400).send(e); }
})

app.post("/addUser", async(req, res) =>{
    try{
        const user = new AddUser(req.body);
        const addUser = await user.save();
        res.status(200).send(addUser);
    }catch(e){res.status(400).send(e); }
})

 
app.get("/register", async(req, res) =>{
    try{
        const registerData = await Register.find();
        res.send(registerData);
    }catch{
        res.send(e)
    }
})

app.get("/login", async(req, res) =>{
    try{
        const loginData = await Login.find();
        res.send(loginData);
    }catch{
        res.send(e)
    }
})
 
// app.get("/addUser", async(req, res) =>{
//     try{
//         const addUserData = await AddUser.find();
//         res.send(addUserData);
//     }catch{
//         res.send(e)
//     }
// })


app.post("/addUser", async(req, res) =>{
    try{
        const user = AddUser.create(req.body)
        res.status(200).send(user);
    } catch(e){res.status(400).send(e);}
})

app.listen(port, ()=>{
    console.log(`connection is setup at ${port}`)
})