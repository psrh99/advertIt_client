import React from "react";
import Footer from "../../Footer/Footer.component";
import NavBar from "../../Navbar/NavBar.component"
import "./contact.styles.css"


const Contact = () => (
    <div className="body-contact">
    <NavBar/>
        
        <div className="contact-form">
            <form action="" autoComplete="off">
                <h1>CONTACT US</h1>
                <hr />
                <label htmlFor="name">Name :</label>
                <br />
                <input type="text" name="" id="" className="inputbox" placeholder="Name"/>
                <br />
                <label htmlFor="email">E-mail :</label>
                <br />
                <input type="text" name="" id="" className="inputbox" placeholder="Email"/>
                <br />
                <label htmlFor="message">Message :</label>
                <br />
                <textarea name="" id="" cols="60" rows="6" placeholder="Please type your message !.." ></textarea>
                <br />
                <input type="submit" value="<- SUBMIT ->" className="btn btn-primary sub-btn" />
            </form>
        </div>
    <Footer/>
    </div>
)
export default Contact;