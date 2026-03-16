import "../style.css"

function DeveloperDashboard(){

return(

<div className="dev-dashboard">

<div className="dev-header">

<div className="dev-profile">

<div className="avatar">H</div>

<div>

<h2>Himanshi</h2>

<p>Platform Member • React • 3 yrs exp • India</p>

</div>

</div>

<button className="browse-btn">
Browse Projects →
</button>

</div>


<div className="dev-stats">

<div className="stat-card">
<p>Applications Sent</p>
<h3>0</h3>
</div>

<div className="stat-card">
<p>Projects Completed</p>
<h3>0</h3>
</div>

<div className="stat-card">
<p>Total Earned</p>
<h3>$0</h3>
</div>

<div className="stat-card">
<p>My Rating</p>
<h3>0 ⭐</h3>
</div>

</div>

</div>

)

}

export default DeveloperDashboard