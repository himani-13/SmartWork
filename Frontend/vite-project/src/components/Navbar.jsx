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

<Link to="/marketplace">ClientLogin</Link>

<Link to="/admin-login">AdminLogin</Link>


{/* SIGNUP BUTTON */}

<Link to="/signup">
<button className="signup-btn">
Get Started
</button>
</Link>

</div>

</nav>

)

}

export default Navbar