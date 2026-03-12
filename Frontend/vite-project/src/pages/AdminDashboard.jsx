import { useState } from "react"
import projects from "../data/projects"
import developers from "../data/developers"

import {
Chart as ChartJS,
CategoryScale,
LinearScale,
PointElement,
LineElement,
BarElement,
ArcElement,
Tooltip,
Legend
} from "chart.js"

import { Bar, Pie, Line, Doughnut } from "react-chartjs-2"

ChartJS.register(
CategoryScale,
LinearScale,
PointElement,
LineElement,
BarElement,
ArcElement,
Tooltip,
Legend
)

function AdminDashboard(){

const [tab,setTab] = useState("overview")

/* KPI */

const totalProjects = projects.length
const activeDevelopers = developers.length
const activeProjects = 12
const avgRating = 4.5


/* CHART DATA */

const countryChart = {
labels:["USA","UK","India"],
datasets:[{
label:"Projects",
data:[5,3,4],
backgroundColor:"#3b82f6"
}]
}

const skillChart = {
labels:["React","Node","Python","AI"],
datasets:[{
label:"Demand",
data:[6,5,3,4],
backgroundColor:"#10b981"
}]
}

const devSkillChart = {
labels:["Frontend","Backend","Fullstack"],
datasets:[{
label:"Developers",
data:[4,3,5],
backgroundColor:"#f59e0b"
}]
}

const categoryChart = {
labels:["Web","AI","FinTech"],
datasets:[{
data:[8,3,3],
backgroundColor:["#2563eb","#10b981","#f59e0b"]
}]
}

const budgetChart = {
labels:["$0-500","$500-1500","$1500+"],
datasets:[{
data:[4,6,4],
backgroundColor:["#6366f1","#14b8a6","#f97316"]
}]
}

const trendChart = {
labels:["Jan","Feb","Mar","Apr","May","Jun"],
datasets:[{
label:"Projects",
data:[2,3,5,4,6,7],
borderColor:"#2563eb",
backgroundColor:"#93c5fd",
tension:0.4
}]
}

return(

<div className="admin-dashboard">

<h1>Admin Platform Dashboard</h1>

{/* TABS */}

<div className="dashboard-tabs">

<button
className={tab==="overview"?"active":""}
onClick={()=>setTab("overview")}
>
Overview
</button>

<button
className={tab==="analytics"?"active":""}
onClick={()=>setTab("analytics")}
>
Analytics
</button>

<button
className={tab==="management"?"active":""}
onClick={()=>setTab("management")}
>
Management
</button>

</div>


{/* ================= OVERVIEW ================= */}

{tab==="overview" && (

<div>

{/* KPI */}

<div className="kpi-grid">

<div className="card">
<h3>Total Projects</h3>
<p>{totalProjects}</p>
</div>

<div className="card">
<h3>Active Projects</h3>
<p>{activeProjects}</p>
</div>

<div className="card">
<h3>Active Developers</h3>
<p>{activeDevelopers}</p>
</div>

<div className="card">
<h3>Average Client Rating</h3>
<p>{avgRating}</p>
</div>

</div>


{/* CHARTS */}

<h2>Platform Insights</h2>

<div className="analytics-grid">

<div className="card">
<h3>Projects by Country</h3>
<Bar data={countryChart}/>
</div>

<div className="card">
<h3>Top Skills Demand</h3>
<Bar data={skillChart}/>
</div>

</div>


{/* RECENT PROJECTS */}

<h2>Recent Projects</h2>

<table className="admin-table">

<thead>
<tr>
<th>Project</th>
<th>Budget</th>
<th>Country</th>
<th>Status</th>
</tr>
</thead>

<tbody>

{projects.map((p,i)=>(
<tr key={i}>
<td>{p.title}</td>
<td>${p.budget}</td>
<td>{p.country}</td>
<td>Active</td>
</tr>
))}

</tbody>

</table>


{/* TOP DEVELOPERS */}

<h2>Top Developers</h2>

<table className="admin-table">

<thead>
<tr>
<th>Name</th>
<th>Skill</th>
<th>Experience</th>
<th>Rating</th>
</tr>
</thead>

<tbody>

{developers.map((d,i)=>(
<tr key={i}>
<td>{d.name}</td>
<td>{d.skill}</td>
<td>{d.experience}</td>
<td>{d.rating}</td>
</tr>
))}

</tbody>

</table>

</div>

)}



{/* ================= ANALYTICS ================= */}

{tab==="analytics" && (

<div className="analytics-grid">

<div className="card">
<h3>Projects by Country</h3>
<Bar data={countryChart}/>
</div>

<div className="card">
<h3>Projects by Skill</h3>
<Bar data={skillChart}/>
</div>

<div className="card">
<h3>Developers by Skill</h3>
<Bar data={devSkillChart}/>
</div>

<div className="card">
<h3>Project Categories</h3>
<Pie data={categoryChart}/>
</div>

<div className="card">
<h3>Budget Distribution</h3>
<Doughnut data={budgetChart}/>
</div>

<div className="card">
<h3>Project Trend</h3>
<Line data={trendChart}/>
</div>

</div>

)}



{/* ================= MANAGEMENT ================= */}

{tab==="management" && (

<div>

<h2>Client Projects</h2>

<table className="admin-table">

<thead>
<tr>
<th>Project</th>
<th>Budget</th>
<th>Country</th>
<th>Actions</th>
</tr>
</thead>

<tbody>

{projects.map((p,i)=>(
<tr key={i}>

<td>{p.title}</td>
<td>${p.budget}</td>
<td>{p.country}</td>

<td>

<button className="edit-btn">
Edit
</button>

<button className="delete-btn">
Delete
</button>

</td>

</tr>
))}

</tbody>

</table>



<h2>Developers</h2>

<table className="admin-table">

<thead>
<tr>
<th>Name</th>
<th>Skill</th>
<th>Experience</th>
<th>Rating</th>
<th>Actions</th>
</tr>
</thead>

<tbody>

{developers.map((d,i)=>(
<tr key={i}>

<td>{d.name}</td>
<td>{d.skill}</td>
<td>{d.experience}</td>
<td>{d.rating}</td>

<td>

<button className="edit-btn">
Edit
</button>

<button className="delete-btn">
Delete
</button>

</td>

</tr>
))}

</tbody>

</table>

</div>

)}

</div>

)

}

export default AdminDashboard