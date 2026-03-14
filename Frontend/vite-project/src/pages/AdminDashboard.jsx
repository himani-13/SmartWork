import { useState } from "react"
import { useNavigate } from "react-router-dom"
import projects from "../data/projects"

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

import { Line, Doughnut, Bar } from "react-chartjs-2"

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

    const navigate = useNavigate()

    const handleSignOut = () => {
localStorage.removeItem("adminAuth")   // login session remove
navigate("/admin-login")             // login page open
}
const [tab,setTab] = useState("overview")
const [filter,setFilter] = useState("all")
const [search,setSearch] = useState("")

/* USERS */

const users = [

{ name:"Rahul Sharma", role:"Developer", location:"India", email:"rahul.sharma@smartdev.com", joined:"Jan 2026" },
{ name:"Ankit Verma", role:"Developer", location:"USA", email:"ankit.verma@smartdev.com", joined:"Feb 2026" },
{ name:"Priya Patel", role:"Developer", location:"Germany", email:"priya.patel@smartdev.com", joined:"Dec 2025" },
{ name:"Ravi Mehta", role:"Developer", location:"Singapore", email:"ravi.mehta@smartdev.com", joined:"Nov 2025" },
{ name:"Arjun Mehra", role:"Developer", location:"Australia", email:"arjun.mehra@smartdev.com", joined:"Jan 2026" },

{ name:"Aman Shah", role:"Client", location:"India", email:"aman.shah@smartdev.com", joined:"Mar 2026" },
{ name:"Ritika Jain", role:"Client", location:"UK", email:"ritika.jain@smartdev.com", joined:"Apr 2026" },
{ name:"Karan Malhotra", role:"Client", location:"USA", email:"karan.malhotra@smartdev.com", joined:"Feb 2026" },
{ name:"Neha Kapoor", role:"Client", location:"Canada", email:"neha.kapoor@smartdev.com", joined:"Jan 2026" },
{ name:"Vikram Singh", role:"Client", location:"Netherlands", email:"vikram.singh@smartdev.com", joined:"Mar 2026" }

]

/* FILTER */

const filteredUsers = users
.filter(user => filter==="all" ? true : user.role.toLowerCase()===filter)
.filter(user => user.name.toLowerCase().includes(search.toLowerCase()))

/* KPI */

const totalUsers = users.length
const totalProjects = projects.length
const openProjects = 12
const totalApplications = 18


/* CHART DATA */

const trendChart = {

labels:["Jan","Feb","Mar","Apr","May","Jun"],

datasets:[{
label:"Project Demand Trend",
data:[30,45,38,55,50,65],
borderColor:"#2563eb",
backgroundColor:"rgba(37,99,235,0.15)",
tension:0.4,
fill:true
}]

}

const demandBarChart = {

labels:["USA","Germany","India","UAE","UK","Brazil"],

datasets:[{
label:"Country Demand",
data:[120,90,80,70,65,60],
backgroundColor:"#2563eb"
}]

}

const categoryChart = {

labels:["Engineering","Design","AI","FinTech"],

datasets:[{
data:[42,18,22,18],
backgroundColor:["#2563eb","#10b981","#f59e0b","#6366f1"]
}]

}

const overallChart = {

labels:["Q1","Q2","Q3","Q4"],

datasets:[{
label:"Overall Growth",
data:[120,180,220,300],
backgroundColor:["#6366f1","#2563eb","#10b981","#f59e0b"]
}]

}

const chartOptions = {

responsive:true,

plugins:{ legend:{ position:"top" } },

scales:{
y:{ beginAtZero:true },
x:{ grid:{ display:false } }
}

}


return(

<div className="admin-container">


{/* TOPBAR */}

<div className="admin-topbar">

<h2>SmartDev Marketplace</h2>

<div className="admin-menu">

<button onClick={()=>setTab("overview")}>Overview</button>
<button onClick={()=>setTab("analytics")}>Analytics</button>
<button onClick={()=>setTab("users")}>Users</button>

</div>

<button className="signout-btn" onClick={handleSignOut}>
Sign Out
</button>

</div>


{/* KPI (hidden in Users tab) */}

{tab !== "users" && (

<div className="admin-kpi-grid">

<div className="kpi-card">
<h4>Total Users</h4>
<h2>{totalUsers}</h2>
</div>

<div className="kpi-card">
<h4>Total Projects</h4>
<h2>{totalProjects}</h2>
</div>

<div className="kpi-card">
<h4>Open Projects</h4>
<h2>{openProjects}</h2>
</div>

<div className="kpi-card">
<h4>Total Applications</h4>
<h2>{totalApplications}</h2>
</div>

</div>

)}



{/* OVERVIEW */}

{tab==="overview" && (

<div>

{/* CHARTS */}

<div className="charts-dashboard">

<div className="admin-card">
<h3>Project Demand Trend</h3>
<Line data={trendChart} options={chartOptions}/>
</div>

<div className="admin-card">
<h3>Category Distribution</h3>
<Doughnut data={categoryChart}/>
</div>

<div className="admin-card">
<h3>Country Demand</h3>
<Bar data={demandBarChart} options={chartOptions}/>
</div>

<div className="admin-card">
<h3>Overall Platform Growth</h3>
<Bar data={overallChart}/>
</div>

</div>


{/* USER TABLE (overview without details column) */}

<div className="admin-card user-management">

<div className="user-header">

<h2>Management Section</h2>

</div>

<table className="admin-table">

<thead>

<tr>
<th>User</th>
<th>Role</th>
<th>Status</th>
<th>Joined</th>
<th>Location</th>
</tr>

</thead>

<tbody>

{filteredUsers.map((user,i)=>(

<tr key={i}>

<td className="user-cell">

<div className="user-avatar">
{user.name.charAt(0)}
<span className="active-dot"></span>
</div>

<div>
<strong>{user.name}</strong>
<p className="user-email">{user.email}</p>
</div>

</td>

<td>
<span className="role-badge">{user.role}</span>
</td>

<td>
<span className="status-badge">Active</span>
</td>

<td>{user.joined}</td>

<td>📍 {user.location}</td>

</tr>

))}

</tbody>

</table>

</div>

</div>

)}



{/* USERS TAB */}

{tab==="users" && (

<div className="admin-card user-management">

<div className="user-header">

<h2>Management Section</h2>

<div className="user-controls">

<button onClick={()=>setFilter("all")}>All</button>
<button onClick={()=>setFilter("developer")}>Developer</button>
<button onClick={()=>setFilter("client")}>Client</button>

<input
type="text"
placeholder="Search users..."
value={search}
onChange={(e)=>setSearch(e.target.value)}
/>

</div>

</div>


<table className="admin-table">

<thead>

<tr>
<th>User</th>
<th>Role</th>
<th>Status</th>
<th>Joined</th>
<th>Location</th>
<th>Details</th>
</tr>

</thead>

<tbody>

{filteredUsers.map((user,i)=>(

<tr key={i}>

<td className="user-cell">

<div className="user-avatar">
{user.name.charAt(0)}
<span className="active-dot"></span>
</div>

<div>
<strong>{user.name}</strong>
<p className="user-email">{user.email}</p>
</div>

</td>

<td>
<span className="role-badge">{user.role}</span>
</td>

<td>
<span className="status-badge">Active</span>
</td>

<td>{user.joined}</td>

<td>📍 {user.location}</td>

<td>
<button
className="view-btn"
onClick={()=>navigate(`/user/${i}`)}
>
View
</button>
</td>

</tr>

))}

</tbody>

</table>

</div>

)}



{/* ANALYTICS */}

{tab==="analytics" && (

<div className="charts-dashboard">

<div className="admin-card">
<h3>Project Demand Trend</h3>
<Line data={trendChart} options={chartOptions}/>
</div>

<div className="admin-card">
<h3>Category Distribution</h3>
<Doughnut data={categoryChart}/>
</div>

<div className="admin-card">
<h3>Country Demand</h3>
<Bar data={demandBarChart} options={chartOptions}/>
</div>

<div className="admin-card">
<h3>Overall Platform Growth</h3>
<Bar data={overallChart}/>
</div>

</div>

)}

</div>

)

}

export default AdminDashboard