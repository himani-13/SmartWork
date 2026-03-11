import { Link } from "react-router-dom";

function Navbar(){

return(

<div className="navbar">

<div className="logo">
Spartan Tech Marketplace
</div>

<div>

<Link to="/">Home</Link>

<Link to="/marketplace">Marketplace</Link>

<Link to="/admin">Admin Dashboard</Link>

</div>

</div>

)

}

export default Navbar