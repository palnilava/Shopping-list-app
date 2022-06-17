import React from 'react'
import {useMediaQuery} from './hooks';

export const ShopItem = ({shop, onDelete}) => {

    const isRowBased = useMediaQuery('(max-width: 768px)');
    const myStyle = { 
        wrap:isRowBased => ( {
            // textAlign:"center",
            margin:"2rem",
            // outline:"solid 3px red",
            padding: "1.5rem",
            flexDirection: isRowBased ? 'column' : 'row',
            width: isRowBased ? '75%' : '33%',
            boxShadow: "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",

        })
    };

    return (
        <>
        <div className='wrap' style={myStyle.wrap(isRowBased)}>
           <h4>{shop.sno}. {shop.title} shop </h4>
           <p><b>Type of Shop</b>- {shop.desc}</p>
           <p><b>Area of Shop</b>- {shop.area}</p>
           <p><b>category of Shop</b>- {shop.category}</p>
           <p><b>Opening date of Shop</b>- {shop.opd}</p>
           <p><b>Closing date of Shop</b>- {shop.cpd}</p>
           <div className="btnwrap" style={{textAlign: "center"}}>       
           <button className="btn btn-sm btn-danger "  onClick={()=>{onDelete(shop)}}>Delete</button> 
           </div>
        </div>
        <hr/> 
        </>
    )
}
