import React from 'react'
import {ShopItem} from "./ShopItem";
import {BiListCheck}  from 'react-icons/bi';

export const Shops = (props) => {
    const myStyle = { 
    cont: {
        minHeight: "70vh",
        margin: "40px auto",
    },

    wrap: {

        display: "flex",
        flexWrap:"wrap",
        justifyContent:"space-between",
        
        // outline:"solid 3px blue",
        boxShadow: "rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset",

    },
};
    
    return (
        <div className="container" style={myStyle.cont}>
            <hr/>
            <h3 className="my-3"> <BiListCheck/> Shops List</h3>
            <div className="wrapper" style={myStyle.wrap} >
            {props.shops.length===0? "No Shops to display":  
            props.shops.map((shop)=>{
                console.log(shop.sno);
                return (<ShopItem shop={shop} key={shop.sno} onDelete={props.onDelete}/>   
                )
            })
              } 
              </div>
        </div>
    )
}
