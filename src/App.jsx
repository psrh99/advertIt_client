import React from 'react'
import Home from './components/subpages/Home/home.component.jsx'
import Login from './components/subpages/login/login.component.jsx'
// import { Aboutus } from './components/subpages/About US/aboutus.component.jsx'
import SignUp from './components/subpages/login/signup.component.jsx'
import Contact from './components/subpages/Contact/contact.component.jsx'
import GoogleLoginComponent  from './components/subpages/GoogleLogin/googlebutton.component.jsx'
// import Carouselcomp from './components/Banner/carousel.jsx'
import './App.css'
import {Routes, Route} from 'react-router-dom'
import AddnewPost from './components/subpages/Home/Addpost.component.jsx'


function App() {

  
  return (
    <div>
      {/* <NavBar /> */}
          <Routes>      
    <Route path='/' element={<Home />} /> 
    <Route path='/login' element={<Login />} />
    {/* <Route path='/about' element={<Aboutus />} /> */}
    <Route path='/signup' element={<SignUp />} />
    <Route path='/contact' element={<Contact />} />
    <Route path='/googlebutton' element={<GoogleLoginComponent />}/>
    {/* <Route path='/carousel' element={<Carouselcomp />} /> */}
    <Route path='/addPost' element={<AddnewPost />} />
    
    </Routes>
    </div>

  )
}

export default App
