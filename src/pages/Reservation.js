import { useState } from "react";
import "../styles/Reservation.css";

function Reservation(){

const [form,setForm]=useState({
name:"",
date:"",
time:"",
guests:""
});

const submit=async(e)=>{

e.preventDefault();

const email=localStorage.getItem("email");

await fetch("http://127.0.0.1:5000/reserve",{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({
name:form.name,
email:email,
date:form.date,
time:form.time,
guests:form.guests
})
});

alert("Reservation Successful");

};

return(

<div className="reservation-container">

<form className="reservation-form" onSubmit={submit}>

<h2 className="reservation-title">Table Reservation</h2>

<input
placeholder="Enter Name"
required
onChange={e=>setForm({...form,name:e.target.value})}
/>

<input
type="date"
required
onChange={e=>setForm({...form,date:e.target.value})}
/>

<input
type="time"
required
onChange={e=>setForm({...form,time:e.target.value})}
/>

<input
placeholder="Number of Guests"
required
onChange={e=>setForm({...form,guests:e.target.value})}
/>

<button type="submit">Reserve</button>

</form>

</div>

);

}

export default Reservation;