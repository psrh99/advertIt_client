import React from "react";
import NavBar from "../../Navbar/NavBar.component";
import { Link } from "react-router-dom";
import "./signup.styles.css";
import Footer from "../../Footer/Footer.component";

const SignUp = () => (
  <>
    <NavBar/>
    <div className="body-signup">
    <div className="session">
        <form action="" className="sign-up" autocomplete="off"> 
            <h4 style={{color:"white"}}>Hello, I Hope You Are Doing Good.</h4>
            <br />
            <h6 style={{color:"azure"}}>Kindly fill the details to register</h6>
            <br />
            <label htmlfor="name">Name :</label>
            <br />
            <input placeholder="Name" type="text" name="name" id="name" autocomplete="off" className="inputbox"/>
            <br />
            <label htmlfor="mobile">Mobile No :</label>
            <br />
            <input placeholder="Mobile No." type="number" name="mobile" id="mobile" autocomplete="off" className="inputbox"/>
            <br />
            <label htmlfor="email">Email :</label>
            <br />
            <input placeholder="Email" type="email" name="email" id="email" autocomplete="off" className="inputbox"/>
            <br />
            <label htmlfor="password">Password :</label>
            <br />
            <input placeholder="Password" type="password" name="password" id="password" autocomplete="off" className="inputbox"/>
            <br />
            <button type="submit" onClick="return false;" className="btn btn-primary signupbtn">Sign Up</button>
            <br /><br />
            <label htmlFor="">Already a existing user? <Link to='/login' className="login-link">Log-in here</Link></label>
        </form>
      </div>
      </div>
      <Footer/>
  </>
);

export default SignUp;
