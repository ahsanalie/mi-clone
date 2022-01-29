import React from 'react'
import Offer from "./Offer.js"
import "./style.css"


const Offers = ({props}) => {
    return (
        <div className="offersSection"> 
        {props.map((item,index)=>(
        <Offer key={item.image} index={index} src={item.image} link={item.url} />
        ))}
    </div>
    )
}

export default Offers