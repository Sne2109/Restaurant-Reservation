import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../styles/Auth.css";

function Register(){

  const navigate = useNavigate();

  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");

  const handleRegister = async (e)=>{

    e.preventDefault();

    await fetch("http://127.0.0.1:5000/register",{

      method:"POST",

      headers:{
        "Content-Type":"application/json"
      },

      body:JSON.stringify({
        name,
        email,
        password
      })

    });

    alert("Registered Successfully");

    navigate("/");

  }

  return(

    <div className="auth-container">

      <form className="auth-card" onSubmit={handleRegister}>

        <h2>Register</h2>

        <input placeholder="Name" onChange={(e)=>setName(e.target.value)}/>
        <input placeholder="Email" onChange={(e)=>setEmail(e.target.value)}/>
        <input placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>

        <button>Register</button>

        <p>
          Already account?
          <Link to="/"> Login</Link>
        </p>

      </form>

    </div>

  );
}

export default Register;