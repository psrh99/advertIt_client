import './ProductList.styles.css'

import React, { useState, useEffect } from "react";
import PostServices from '../../Services/PostServices'
import Card from './Card.component.jsx'

const ProductList = () => {
   const [loading, setLoading] = useState(true)
   
   const [posts, setPosts] = useState(null)

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
   
   return(
      <div className="main">

            {
               !loading && (
                  posts.map((post) => (
                     <Card post = {post} key={post.id} />
                  ))
               )
            }
      </div>
   )
}


export default ProductList
