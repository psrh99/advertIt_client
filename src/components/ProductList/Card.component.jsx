import React from 'react'
// import Card1 from './card1.jpg'

const Card = ({post}) => (
        <div className="card" style={{width: "18rem"}}>
        <img src={post.image_url } className="card-img-top " style={{height:"250px", padding:"8px", position:"cover"}} alt="..." />
        <div className="card-body">
            <h5 className="card-title">{post.title}</h5>
            <p style={{color: "blue"}}>₹{post.price}</p>
            <p className="card-text" style={{color:"black"}}>{post.description}</p>
            <a href="#" className="btn btn-primary">BUY NOW</a>
        </div>
        </div>
)




export default Card