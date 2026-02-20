import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../styles/Auth.css";

function Login(){

  const navigate = useNavigate();

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const handleLogin = async (e)=>{

    e.preventDefault();

    try{

      const res = await fetch("http://127.0.0.1:5000/login",{

        method:"POST",

        headers:{
          "Content-Type":"application/json"
        },

        body:JSON.stringify({
          email,
          password
        })

      });

      const data = await res.json();

      if(res.ok){   // ✅ CORRECT VARIABLE

        // store user info
        localStorage.setItem("email", data.email);
        localStorage.setItem("name", data.name);
        localStorage.setItem("user_id", data.id);

        navigate("/dashboard");

      }
      else{

        alert(data.message || "Invalid credentials");

      }

    }
    catch(error){

      alert("Backend not running");

    }

  };

  return(

    <div className="auth-container">

      <form className="auth-card" onSubmit={handleLogin}>

        <h2>Login</h2>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
          required
        />

        <button type="submit">
          Login
        </button>

        <p>
          No account?
          <Link to="/register"> Register</Link>
        </p>

      </form>

    </div>

  );

}

export default Login;