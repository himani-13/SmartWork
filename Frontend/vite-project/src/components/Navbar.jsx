import { Link } from "react-router-dom";
import "../style.css";

function Navbar(){

return(

<nav className="navbar">

<div className="logo">
Spartan Tech Marketplace
</div>

<div className="nav-links">

<Link to="/">Home</Link>

<Link to="/marketplace">Marketplace</Link>

<Link to="/admin-login">Dashboard</Link>

<Link to="/profile">Profile</Link>

<button className="login-btn">
Login
</button>

<button className="signup-btn">
Sign Up
</button>

</div>

</nav>

)

}

export default Navbar