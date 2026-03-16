import React from "react";
import { Link } from "react-router-dom";

function ClientDashboard(){

return(

<div className="dashboard">

<div className="dashboard-header">

<h2>Client Dashboard</h2>

<Link to="/create-project">
<button className="post-btn">
+ Post New Project
</button>
</Link>

</div>

<div className="cards">

<div className="card">
<h4>My Projects</h4>
<p>200</p>
</div>

<div className="card">
<h4>Total Spend</h4>
<p>---</p>
</div>

<div className="card">
<h4>Avg Match Score</h4>
<p>---</p>
</div>

<div className="card">
<h4>Avg Dev Rating</h4>
<p>---</p>
</div>

</div>

</div>

)

}

export default ClientDashboard
