import { useEffect, useState } from "react";
import "../styles/History.css";

function History(){

const [data,setData]=useState([]);

useEffect(()=>{

const email=localStorage.getItem("email");

fetch("http://127.0.0.1:5000/history/"+email)
.then(res=>res.json())
.then(setData);

},[]);

return(

<div className="history-container">

<h2 className="history-title">Booking History</h2>

<div className="history-list">

{data.length === 0 ? (

<div className="no-history">No history found</div>

) : (

data.map((d,i)=>(

<div className="history-card" key={i}>

<span className="history-date">{d.date}</span>

<span className="history-time">{d.time}</span>

<span className="history-guests">{d.guests} Guests</span>

</div>

))

)}

</div>

</div>

);

}

export default History;