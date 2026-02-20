import Chatbot from "../components/Chatbot";
import Navigation from "../components/Navigation";
import "../styles/Dashboard.css";

function Dashboard(){

return(

<div className="dashboard-container">

<Navigation />

<div className="dashboard-content">

<h2 className="dashboard-title">Welcome to Restaurant</h2>

<div className="dashboard-card">

<Chatbot />

</div>

</div>

</div>

);

}

export default Dashboard;