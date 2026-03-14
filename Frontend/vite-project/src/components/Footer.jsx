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


{/* NAVIGATION */}

<div>

<h4>Navigation</h4>

<Link to="/">Home</Link>
<br/>

<Link to="/marketplace">Marketplace</Link>
<br/>

<Link to="/admin-login">Admin Login</Link>
<br/>

<Link to="/profile">Profile</Link>

</div>


{/* ACCOUNT */}

<div>

<h4>Account</h4>

<Link to="/admin-login">Login</Link>
<br/>

<Link to="/signup">Sign Up</Link>

</div>


{/* SUPPORT */}

<div>

<h4>Support</h4>

<Link to="#">Help Center</Link>
<br/>

<Link to="#">Terms</Link>
<br/>

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