import React, { useState } from 'react';
import {useMediaQuery} from './hooks';
import {BsShop}  from 'react-icons/bs';
import {MdOutlinePlace}  from 'react-icons/md';
import {BiCategoryAlt}  from 'react-icons/bi';
import {BsCalendarCheck}  from 'react-icons/bs';
import {BsCalendarX}  from 'react-icons/bs';
import {TbShoppingCartPlus}  from 'react-icons/tb';

export const AddShop = ({ addShop }) => {

    const flexGrp = useMediaQuery('(max-width: 600px)');
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [area, setArea] = useState("");
    const [category, setCategory] = useState("");
    const [opd, setOpd] = useState("");
    const [cpd, setCpd] = useState("");


    const submit = (e) => {
        e.preventDefault();
        if (!title || !desc || !area || !category || !opd || !cpd) {
            alert("Title or Description cannot be blank");
        }
        else {
            addShop(title, desc,area,category,opd,cpd);
            setTitle("");
            setDesc("");
            setArea("");
            setCategory("");
            setOpd("");
            setCpd("");
        }
    }


    const myStyle = { 
        wrap: flexGrp => ( {
            display: "flex",
            justifyContent:"space-between",
            flexDirection: flexGrp ? 'column' : 'row',

        }),

        resize: flexGrp => ( {
           width: flexGrp ? '100%' : '43%',

        }),

        inpt: {
            outline: "0",
            borderWidth: "0 0 1px 0",
            borderColor: "grey",
            cursor:"pointer",
 
         }
    };

    return (
        <div className="container my-3">
            <h3 style={{textAlign: "center"}}><u>Add a Shop</u></h3>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <BsShop/>
                    <label htmlFor="title" className="form-label" style={{margin : "0 0 0 9px"}}>Shop Name</label>
                    <input style={myStyle.inpt} type="text" placeholder="type the name of shop" value={title} onChange={(e) => setTitle(e.target.value)} className="form-control" id="title" aria-describedby="emailHelp" />

                </div>
                <div className="mb-3">
                    <TbShoppingCartPlus/>
                    <label htmlFor="desc" className="form-label" style={{margin : "0 0 0 9px"}}>Shop Description</label>
                    <input style={myStyle.inpt} type="text" placeholder="type of shop" value={desc} onChange={(e) => setDesc(e.target.value)} className="form-control" id="desc" />
                </div>

                <div className="mb-3">
                     <MdOutlinePlace/>
                    <label htmlFor="area" className="form-label" style={{margin : "0 0 0 9px"}}>Shop Area</label>
                    <input style={myStyle.inpt}type="text" list="area"  className="form-select" placeholder="Select Area" value={area} onChange={(e) => setArea(e.target.value)} required />
                    <datalist   id="area" >
                        <option>Thane</option>
                        <option>Pune</option>
                        <option>Mumbai Suburban</option>
                        <option>Nashik</option>
                        <option>Nagpur</option>
                        <option>Ahmednagar</option>
                        <option>Solapur</option>
                        </datalist >
                </div>

                <div className="mb-3">
                    <BiCategoryAlt/>
                <label htmlFor="category" className="form-label" style={{margin : "0 0 0 9px"}}>Shop category</label>
                    <input style={myStyle.inpt}type="text" list="category"  className="form-select" placeholder="Select category" value={category} onChange={(e) => setCategory(e.target.value)} required />
                    <datalist id="category" >
                        <option>Grocery</option>
                        <option>Butcher</option>
                        <option>Baker</option>
                        <option>Chemist</option>
                        <option>Stationery shop</option>
                        </datalist >
                </div>

                <div className="flex-group"  style={myStyle.wrap(flexGrp)}>
                    <div className="mb-3" style={myStyle.resize(flexGrp)} >
                        <BsCalendarCheck/>
                        <label htmlFor="opd" className="form-label" style={{margin : "0 0 0 9px"}}>Opening Date</label>
                        <input style={myStyle.inpt} type="date" placeholder="dd/mm/yyyy" value={opd} onChange={(e) => setOpd(e.target.value)} className="form-control" id="opd" />
                    </div>

                    <div className="mb-3" style={myStyle.resize(flexGrp)} >
                        <BsCalendarX/>
                        <label htmlFor="opd" className="form-label" style={{margin : "0 0 0 9px"}}>Closing Date</label>
                        <input style={myStyle.inpt} type="date" placeholder="dd/mm/yyyy" value={cpd} onChange={(e) => setCpd(e.target.value)} className="form-control" id="cpd" />
                    </div>
                </div>


                <button type="submit" className="btn btn-sm btn-success">Add Shop Details</button>
            </form>
        </div>
    )
}
