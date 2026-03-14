import { useNavigate } from "react-router-dom"

function ClientDashboard(){

const navigate = useNavigate()

return(

<div className="dashboard">

<h1 className="dashboard-title">Client Dashboard</h1>

<div className="dashboard-grid">

{/* Post Project */}

<div className="dash-card">

<h3>Post New Project</h3>

<p>Create a new project requirement</p>

<button 
className="dash-btn"
onClick={()=>navigate("/post-project")}
>
Post Project
</button>

</div>


{/* Recommended Developers */}

<div className="dash-card">

<h3>Recommended Developers</h3>

<p>View AI recommended developers</p>

<button
className="dash-btn"
onClick={()=>navigate("/recommended")}
>
View Developers
</button>

</div>


{/* Applications */}

<div className="dash-card">

<h3>Applications</h3>

<p>Check developer applications</p>

<button
className="dash-btn"
onClick={()=>navigate("/applications")}
>
View Applications
</button>

</div>


{/* Completed Projects */}

<div className="dash-card">

<h3>Completed Projects</h3>

<p>Review completed work</p>

<button
className="dash-btn"
onClick={()=>navigate("/completed")}
>
View Projects
</button>

</div>

</div>

</div>

)

}

export default ClientDashboard