import React from "react";
import {Link} from 'react-router-dom';
import NavBar from "../../Navbar/NavBar.component";
import "./login.styles.css";
import Footer from "../../Footer/Footer.component";
import GoogleLoginComponent from "../GoogleLogin/googlebutton.component.jsx";


const Login = () => (
  <>
    <NavBar/>
    <div className="body-login">
      <div className="session">
        <form action="" className="log-in" autocomplete="off"> 
            <h4 style={{color:"white"}}>Welcome Back</h4>
            <h6 style={{color:"azure"}}>Login and start a productive day!</h6>
            <label htmlfor="email">Email :</label>
            <br />
            <input placeholder="Email" type="email" name="email" id="email" autocomplete="off" className="inputbox"/>
            <br />
            <label htmlfor="password">Password :</label>
            <br />
            <input placeholder="Password" type="password" name="password" id="password" autocomplete="off" className="inputbox"/>
            <br />
            <button type="submit" onClick="return false;" className="btn btn-primary loginbtn">Log in</button>
            <br />
            <GoogleLoginComponent className="google-btn" />
            <br />
            <hr />
            <label htmlFor="">Not a existing user? <Link to='/signup' className="signup-link">sign-up here</Link></label>
        </form>
      </div>
    </div>
    <Footer/>
  </>
);

export default Login;
