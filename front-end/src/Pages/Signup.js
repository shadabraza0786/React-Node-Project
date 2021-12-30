import React, { useState } from 'react';
import { Grid, Paper, Avatar, TextField, Button, Typography } from '@material-ui/core';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import { NavLink, useHistory } from "react-router-dom";

function Signup(){
    const paperstyle = {padding : 20, height:'70vh', width:350, margin:"50px auto"}
    const avatarstyle = {backgroundColor:'green'}
    const btnstyle = {margin: '10px 0'}
    const history = useHistory();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [cpassword, setCPassword] = useState("");
    const [user, setUser] = useState([]);

        const submitForm = async (e) => {
        e.preventDefault();

        const result = await fetch("/register", {
            method: "POST",
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify({
                name, email, password, cpassword
            })
        });

        const data = await result.json();
        if(data.status === 400 || !data){
            window.alert("Invalid LoginDetails");
            console.log("Invalid LoginDetails");
        }else{
            window.alert("Registration Sucessfully");
            console.log("Registration Sucessfully");
            history.push("/Login");
        } 
    }

    return(
        <form action="" onSubmit={submitForm}>
        <Grid>
            <Paper elevation={10} style={paperstyle}>
                <Grid align='center'>
                    <Avatar style={avatarstyle}><AddCircleOutlineIcon/></Avatar>
                    <h1 style={{marginTop:"10px"}}>Sign Up</h1>
                    <Typography variant="caption">Please fill this form for create an account !</Typography>
                </Grid>
                <TextField label="Name" name="name" value={user.name} onChange={(e) => setName(e.target.value)} placeholder="Enter Your Name" fullWidth required />
                <TextField label='Email' name="email" value={user.email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Your Email" style={{marginTop:'10px'}} fullWidth required/>  
                <TextField label='Password' name="password" value={user.password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter Your Password" type="password" style={{marginTop:'10px'}} fullWidth required/>
                <TextField label='Confirm Password' name="cpassword" value={user.cpassword} onChange={(e) => setCPassword(e.target.value)} placeholder="Enter Your Confirm Password" type="password" style={{marginTop:'10px'}} fullWidth required/>       
      <Button type="submit"  color="primary" variant="contained" style={btnstyle} fullWidth>Sign Up</Button>
      <Typography > Click Here for
            <NavLink to="Login" fullWidth>
                <span style={{marginLeft:"5px"}}>Login</span> 
            </NavLink>
            </Typography>
            </Paper>
        </Grid>
        </form>
    );
}

export default Signup;

