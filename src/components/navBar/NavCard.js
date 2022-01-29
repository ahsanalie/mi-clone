import React from 'react'
import "./NavCard.css"


const NavCard = ({name,price,image,index}) => {
    console.log(name,'checclll');
    return (
        <div className="NavCard" >
        <img src={image} alt={`${index} phone`} />
        <p>{name}</p>
        <span>{price}</span>
    </div>
    )
}

export default NavCard