import {projects} from "../data/projects"
import { Link } from "react-router-dom"
import { useState } from "react"

function Marketplace(){

const [saved,setSaved] = useState([])

function toggleSave(id){

if(saved.includes(id)){
setSaved(saved.filter(item=>item!==id))
}
else{
setSaved([...saved,id])
}

}

return(

<div className="ultra-market">

{/* SIDEBAR */}

<div className="ultra-sidebar">

<h2>Find Projects</h2>

<input placeholder="Search projects"/>

<select>
<option>Category</option>
<option>Web Development</option>
<option>Mobile App</option>
<option>AI / ML</option>
</select>

<select>
<option>Budget</option>
<option>$100-$500</option>
<option>$500-$2000</option>
<option>$2000+</option>
</select>

<select>
<option>Country</option>
<option>USA</option>
<option>UK</option>
<option>India</option>
</select>

<div className="sidebar-banner">

<img
src="https://images.unsplash.com/photo-1551434678-e076c223a692"
alt="workspace"
/>

<p>Discover high paying freelance projects</p>

</div>

</div>


{/* MAIN CONTENT */}

<div className="ultra-content">

<h1 className="market-heading">
Global Freelance Marketplace
</h1>

<div className="job-grid">

{projects.map(project => (

<div className="ultra-card" key={project.id}>

{/* SAVE ICON */}

<button
className="save-icon"
onClick={()=>toggleSave(project.id)}
>
{saved.includes(project.id) ? "❤️" : "🤍"}
</button>


{/* HEADER */}

<div className="card-header">

<h3>{project.title}</h3>

<span className="budget">
{project.budget}
</span>

</div>

<p className="description">
{project.description}
</p>


{/* SKILLS */}

<div className="skills">

{project.skills.map((skill,i)=>(

<span className="skill-pill" key={i}>
{skill}
</span>

))}

</div>


{/* CLIENT INFO */}

<div className="client-meta">

<span>🌍 {project.country}</span>
<span>⭐ {project.rating}</span>
<span>⏱ {project.duration}</span>

</div>


{/* MATCH SCORE */}

<div className="match-section">

<span>AI Match</span>

<div className="match-bar">

<div
className="match-fill"
style={{
width:`${Math.floor(Math.random()*20)+80}%`
}}
></div>

</div>

</div>


{/* ACTIONS */}

<div className="actions">

<Link to={`/project/${project.id}`}>
<button className="view-btn">
View Details
</button>
</Link>

<button className="apply-btn">
Apply
</button>

</div>

</div>

))}

</div>

</div>

</div>

)

}

export default Marketplace