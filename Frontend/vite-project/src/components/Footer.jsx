import { Link } from "react-router-dom"
import "../style.css"

function Footer(){

return(

<footer className="footer">

<div className="footer-grid">

{/* BRAND */}

<div>

<h3>Spartan Tech Marketplace</h3>

<p>
Global developer marketplace where businesses
connect with top talent worldwide.
</p>

</div>


{/* PLATFORM */}

<div>

<h4>Platform</h4>

<Link to="/">Home</Link>
<Link to="/marketplace">Marketplace</Link>
<Link to="/admin-login">Dashboard</Link>
<Link to="/profile">Profile</Link>

</div>


{/* ACCOUNT */}

<div>

<h4>Account</h4>

<Link to="/admin-login">Login</Link>
<Link to="/signup">Sign Up</Link>

</div>


{/* SUPPORT */}

<div>

<h4>Support</h4>

<Link to="#">Help Center</Link>
<Link to="#">Terms</Link>
<Link to="#">Privacy Policy</Link>

</div>

</div>


<div className="copyright">

© 2026 Spartan Tech Marketplace

</div>

</footer>

)

}

export default Footer