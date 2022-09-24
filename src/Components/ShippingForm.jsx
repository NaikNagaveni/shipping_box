import React, {useState} from "react";
import './ShippingForm.css';
import ShippingList from './ShippingList';

//two way binding
function ShippingForm(props){
    const [title, setTitle]=useState("");
    const [weight, setWeight]=useState();
    const [color,setColor] =useState("");
    const [place,setPlace]=useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const data={
            title: title,
            weight: weight,
            color:color,
            place: place

        }
        props.addToListCallback(data)
    }
    return(
        <div className="shippingForm">Shipping Form <br/>
        <form onSubmit={handleSubmit}>

            <input type="text" value={title} placeholder="items name"onChange={(e)=>setTitle(e.target.value)}></input><br/>  
            <input type="number" value={weight} placeholder="weight" onChange={(e)=>setWeight(e.target.value)}></input><br/>
            <label>Color    </label>   
            <input type="color"  value={color} onChange={(e)=>setColor(e.target.value)}></input><br/>
            <input type="text" value={place} placeholder="place" onChange={(e)=>setPlace(e.target.value)}></input><br/>
            <br/>
            <button className="submit">Submit</button>
            </form>
        </div>
    )
}

export default ShippingForm;