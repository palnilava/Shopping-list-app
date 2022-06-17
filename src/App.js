import './App.css';
import Header from "./MyComponents/Header";
import { Shops } from "./MyComponents/Shops";
import { Footer } from "./MyComponents/Footer";
import { AddShop } from "./MyComponents/AddShop";
import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  let initShop;
  if (localStorage.getItem("shops") === null) {
    initShop = [];
  }
  else {
    initShop = JSON.parse(localStorage.getItem("shops"));
  }


  const onDelete = (shop) => {
    console.log("I am ondelete of shop", shop);


    setShops(shops.filter((e) => {
      return e !== shop;
    }));
    console.log("deleted", shops)
    localStorage.setItem("shops", JSON.stringify(shops));
  }

  const addShop = (title, desc, area, category, opd, cpd) => {
    console.log("I am adding this shop", title, desc ,area, category, opd, cpd)
    let sno;
    if (shops.length === 0) {
      sno = 1;
    }
    else {
      sno = shops[shops.length-1].sno + 1;
    }
    const myShop = {
      sno: sno,
      title: title,
      desc: desc,
      area: area,
      category : category,
      opd: opd,
      cpd: cpd,

    }
    setShops([...shops, myShop]);
    console.log(myShop);
  }

  const [shops, setShops] = useState(initShop);
  useEffect(() => {
    localStorage.setItem("shops", JSON.stringify(shops));
  }, [shops])

  return ( 
    <> 
    <Router>
      <Header title="Shopping List" searchBar={false} /> 
      <Switch>
          <Route exact path="/" render={()=>{
            return(
            <>
            <AddShop addShop={addShop} />
            <Shops shops={shops} onDelete={onDelete} /> 
            </>)
          }}> 
          </Route>

        </Switch> 
      <Footer />
    </Router>
    </>
  );
}

export default App;
