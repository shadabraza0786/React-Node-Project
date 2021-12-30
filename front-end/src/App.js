import Navbar from "./Components/Navbar";
import Login from "./Pages/Login"
import Signup from "./Pages/Signup"
import Home from "./Pages/Home";
import Dashboard from "./Pages/Dashboard";
import Users from "./Pages/Users"
import { Switch, Route } from "react-router-dom"; 
import AddUser from "./Pages/AddUser";
import Customers from "./Pages/Customers";
import EditUser from "./Pages/EditUser";

function App(){
    return(
            <Switch>
                <div className="appdata">
                <Navbar/>
                <Route exact path="/" component={Home}/>
                <Route exact path="/Home" component={Home}/>
                <Route exact path="/Signup" component={Signup}/>
                <Route exact path="/Login" component={Login}/>
                <Route exact path="/Dashboard" component={Dashboard}/>
                <Route exact path="/Users" component={Users}/>
                <Route exact path="/AddUser" component={AddUser}/>
                <Route exact path="/users/edit/:id" component={EditUser}/>
                <Route exact path="/Customers" component={Customers}/>
                </div>
            </Switch>
    )
}

export default App;