import './NavBar.styles.css'
import {Link} from 'react-router-dom'
import addPost from './add.png'
import AddnewPost from '../subpages/Home/Addpost.component';

const NavBar = () => {

  return(
  <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
    <div className="container-fluid">
      <a className="navbar-brand h1" href="#">
        ADvert It
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse " id="navbarSupportedContent" >
        <ul className="navbar-nav me-auto mb-2 mb-lg-0" >
          <li className="nav-item">
            <Link to='/' className='nav-link active' aria-current="page" >Home</Link>
          </li>
          <li className="nav-item">
            {/* <Link to='/about' className='nav-link'>About Us</Link> */}
          </li>

          <li className="nav-item">
            <Link to='/contact' className='nav-link'>Contact Us</Link>
          </li>
          <li className="nav-item">
              <Link to='/login' className='nav-link'>Login / SignUp</Link>
          </li>
        </ul>
        <form className="d-flex" role="search">
          <button className='addpostbtn'>
            <span className='addpostspan'>Add <br /> Post</span>
            <Link to='/addPost' className='nav-link'>
              <img src={addPost} alt="" style={{width:"40px",padding:"3px",marginRight:"8px"}}/>
            </Link>
          </button>
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            // onChange={handleChange}
          />
          <button className="btn btn-outline-success" type="submit">
            Search
          </button>
        </form>
      </div>
    </div>
  </nav>
  
  


  // <div className="navbar__container">
  // <div className="navbar__content">
  //     <div id="logo">
  //         <h2>ADvert It</h2>
  //     </div>
  //     <div id="search__container">
  //         <input type="search" name="search" id="search-bar" />
  //     </div>
  //     <div>
  //         <ul className="navbar__items">
  //             <li className="navbar__item "><button className="login-btn " type="submit" value="login">LogIn / SignUp</button></li>
  //             <li className="navbar__item"><button className="login-btn about" type="submit" value="about">About</button></li>
  //             <li className="navbar__item"><button className="login-btn contact" type="submit" value="contactus">Contact</button></li>
  //         </ul>
  //     </div>
  // </div>
  // </div>

)
}

export default NavBar;
