import { Link } from "react-router-dom";
import "../styles/Navigation.css";

function Navigation(){

return(

<div className="navbar">

<div className="navbar-logo">Restaurant</div>

<div className="navbar-links">

<Link to="/dashboard">Dashboard</Link>

<Link to="/reservation">Reservation</Link>

<Link to="/history">History</Link>

<button className="logout-btn">Logout</button>

</div>

</div>

);

}

export default Navigation;