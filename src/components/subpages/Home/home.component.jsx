import React from "react";
import NavBar from "../../Navbar/NavBar.component";
import Banner from "../../Banner/Banner.component";
import ProductList from "../../ProductList/ProductList.components";
import Footer from "../../Footer/Footer.component";
import Carousel from "../../Banner/carousel.jsx";
import CarouselComp from "../../Banner/Carousel.component";

const Home =() => {
    
    return(
    <div>
        <NavBar/>
        <CarouselComp />
        {/* <Carousel/> */}
        <Banner/>
        <ProductList />
        <Footer/>
    </div>
    )
}

export default Home