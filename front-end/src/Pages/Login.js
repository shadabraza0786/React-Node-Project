import React from "react";
import { Grid, Paper, Avatar, TextField, Button, Typography, Link as Nv } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { useState } from "react";
import { useHistory, NavLink } from "react-router-dom";

function Login(){
    const paperstyle = {padding : 20, height:'55vh', width:350, margin:"50px auto"}
    const avatarstyle = {backgroundColor:'green'}
    const btnstyle = {margin: '10px 0'}
    const history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [user, setUser] = useState([]);

    const submitForm = async (e) => {
        e.preventDefault();
        const result = await fetch("/login", {
            method: "POST",
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify({
                email, password
            })
        });

        const data = await result.json();
        console.log("=========>",data)
        if(data.status === 400 || !data){
            window.alert("Invalid LoginDetails");
            console.log("Invalid LoginDetails");
        }else{
            window.alert("Login Sucessfully");
            console.log("Login Sucessfully");
            history.push('/Dashboard');
        }  
    }

    return(
             <form action = "" onSubmit={submitForm}>
                <Grid>
                    <Paper elevation={10} style={paperstyle}>
                        <Grid align='center'>
                            <Avatar style={avatarstyle}><LockOutlinedIcon/></Avatar>
                            <h1 style={{marginTop:"10px"}}>Log In</h1>
                        </Grid>
                        <TextField label="Email" name="email" value={user.email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Your Email" fullWidth required/>
                        <TextField label='Password' name="password" value={user.password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter Your Password" style={{marginTop:'10px'}} type='password' fullWidth required/>            
              <Button type="submit" color="primary" variant="contained" style={btnstyle} fullWidth>Login</Button>   
                <Typography >Do You Have and Account ?
                    <NavLink to="Signup" fullWidth>
                        <span style={{marginLeft:"5px"}}>Signup</span>
                    </NavLink>
                    </Typography>
                    </Paper>
                </Grid>
                </form>   
            );
}

export default Login;