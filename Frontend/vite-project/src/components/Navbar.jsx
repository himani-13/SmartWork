import { Link } from "react-router-dom";
import "../style.css";
import React from "react";

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

{/* NEW USER PROFILE SECTION (Added) */}

<div className="user-profile">

<img
src="https://i.pravatar.cc/40"
alt="user"
/>

</div>

</div>

</nav>

)

}

export default Navbar 