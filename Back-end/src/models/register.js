const mongoose = require("mongoose");
const validator = require("validator");

const registerSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        minlength:3
    },
    email:{
        type:String,
        required:true,
        unique:[ true, "Email id already Present"],
        validate(value){
            if (!validator.isEmail(value)){
                throw new Error("Invalid Email")
            }
        }
    },
    password : {
        type:String,
        required:true
    },
    cpassword : {
        type:String,
        required:true
    },
})

const Register = new mongoose.model("Register", registerSchema);
module.exports = Register;