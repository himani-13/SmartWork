import { Link } from "react-router-dom"
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
Title,
Tooltip,
Legend
} from "chart.js"

import { Bar, Pie, Line } from "react-chartjs-2"

ChartJS.register(
CategoryScale,
LinearScale,
PointElement,
LineElement,
BarElement,
ArcElement,
Title,
Tooltip,
Legend
)

function AdminDashboard(){

const totalProjects = projects.length
const activeProjects = projects.filter(p=>p.status==="active").length || 12
const activeDevelopers = developers.length

const avgRating =
developers.reduce((a,d)=>a+(d.rating||4),0)/developers.length


/* Charts Data */

const countryData = {
labels:["USA","UK","India"],
datasets:[
{
label:"Projects",
data:[5,3,4],
backgroundColor:"#3b82f6"
}
]
}

const projectSkillData = {
labels:["React","Node","Python"],
datasets:[
{
label:"Projects",
data:[6,5,3],
backgroundColor:"#10b981"
}
]
}

const developerSkillData = {
labels:["Frontend","Backend","Fullstack"],
datasets:[
{
label:"Developers",
data:[4,3,5],
backgroundColor:"#f59e0b"
}
]
}

const categoryData = {
labels:["Web Development","AI","FinTech"],
datasets:[
{
data:[8,3,3],
backgroundColor:["#2563eb","#10b981","#f59e0b"]
}
]
}

const budgetData = {
labels:["$0-500","$500-1500","$1500+"],
datasets:[
{
data:[4,6,4],
backgroundColor:["#6366f1","#14b8a6","#f97316"]
}
]
}

const trendData = {
labels:["Jan","Feb","Mar","Apr","May","Jun"],
datasets:[
{
label:"Projects Posted",
data:[2,3,5,4,6,7],
borderColor:"#2563eb",
backgroundColor:"#93c5fd",
tension:0.4
}
]
}

return(

<div className="dashboard">

<h1>Admin Analytics Dashboard</h1>

{/* Navigation Buttons */}

<div style={{marginBottom:"30px"}}>

<Link to="/admin/users">
<button>View Users</button>
</Link>

<Link to="/admin/projects">
<button style={{marginLeft:"10px"}}>View Projects</button>
</Link>

</div>


{/* KPI */}

<div className="grid">

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
<p>{avgRating.toFixed(1)}</p>
</div>

</div>


<h2 style={{marginTop:"40px"}}>Platform Analytics</h2>

<div className="analytics-grid">

<div className="card">
<h3>Projects by Country</h3>
<Bar data={countryData}/>
</div>

<div className="card">
<h3>Projects by Skill</h3>
<Bar data={projectSkillData}/>
</div>

<div className="card">
<h3>Developers by Skill</h3>
<Bar data={developerSkillData}/>
</div>

<div className="card">
<h3>Project Categories</h3>
<Pie data={categoryData}/>
</div>

<div className="card">
<h3>Budget Distribution</h3>
<Pie data={budgetData}/>
</div>

<div className="card">
<h3>Project Trends</h3>
<Line data={trendData}/>
</div>

</div>

</div>

)

}

export default AdminDashboard