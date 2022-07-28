import React, {useState, useEffect} from "react";
import NavBar from "../../Navbar/NavBar.component";
import Banner from "../../Banner/Banner.component";
import ProductList from "../../ProductList/ProductList.components";
import Footer from "../../Footer/Footer.component";
import Carousel from "../../Banner/carousel.jsx";
import CarouselComp from "../../Banner/Carousel.component";
import PostServices from '../../../Services/PostServices'

const Home =() => {

    const [loading, setLoading] = useState(true)
   
   const [posts, setPosts] = useState(null)
   const [searchField, setSearchField] = useState("")

   useEffect(() => {
      const fetchData = async () => {
         setLoading(true)
         try{
            const response = await PostServices.getAllPosts()
            setPosts(response.data)
         }catch(error){
            console.log(error)
         }
         setLoading(false)
      }
     fetchData()
   }, [])


    const handleChange = (e) => {setSearchField(e.target.value)}
    
    let filteredPosts = []

    return(
    <div>
        {/* {
            
        } */}
        <NavBar handleChange={handleChange} />
        <CarouselComp />
        {/* <Carousel/> */}
        {/* <Banner/> */}
        {
            !loading&&(
                filteredPosts = posts.filter(post => 
                    post.title.toLowerCase().includes(searchField.toLowerCase())
                    )
            )&&(
                <ProductList posts={filteredPosts} />
            )
        }
        {/* <ProductList posts={posts} /> */}
        <Footer/>
    </div>
    )
}

export default Home