import React from 'react'
// import Card1 from './card1.jpg'

const ListComponent = (props) => (
        <div className="card" style={{width: "18rem"}}>
        <img src={props.item.imageUrl } className="card-img-top " style={{height:"250px"}} alt="..." />
        <div className="card-body">
            <h5 className="card-title">{props.item.title}</h5>
            <p className="card-text" style={{color:"black"}}>{props.item.desc}</p>
            <a href="#" className="btn btn-primary">BUY NOW</a>
        </div>
        </div>


)

export default ListComponent;