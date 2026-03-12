import { useState } from "react"
import { Link } from "react-router-dom"
import projects from "../data/projects"

function Marketplace(){

const [country,setCountry] = useState("")
const [skill,setSkill] = useState("")
const [saved,setSaved] = useState([])

const toggleSave=(id)=>{
if(saved.includes(id)){
setSaved(saved.filter(p=>p!==id))
}else{
setSaved([...saved,id])
}
}

const filtered = projects.filter(p => {

const skills = Array.isArray(p.skills)
? p.skills.join(" ").toLowerCase()
: (p.skills || "").toLowerCase()

return (
(country === "" || p.country === country) &&
(skill === "" || skills.includes(skill.toLowerCase()))
)

})

return(

<div className="marketplace-layout">

{/* SIDEBAR */}

<div className="marketplace-sidebar">

<h3>Filters</h3>

<label>Country</label>

<select
value={country}
onChange={(e)=>setCountry(e.target.value)}
>
<option value="">All</option>
<option value="USA">USA</option>
<option value="India">India</option>
<option value="UK">UK</option>
</select>

<label>Skill</label>

<input
type="text"
placeholder="React, AI..."
value={skill}
onChange={(e)=>setSkill(e.target.value)}
/>

</div>

{/* MAIN CONTENT */}

<div className="marketplace-content">

<h1 className="marketplace-title">
Project Marketplace
</h1>

<div className="project-grid">

{filtered.map(p => {

const match = Math.floor(Math.random()*40)+60
const rating = (Math.random()*2+3).toFixed(1)

return(

<div className="project-card" key={p.id}>

{/* PROJECT IMAGE */}

<img
className="project-image"
src={`https://picsum.photos/400/200?random=${p.id}`}
alt="project"
/>

{/* SAVE BUTTON */}

<button
className="save-btn"
onClick={()=>toggleSave(p.id)}
>
{saved.includes(p.id) ? "❤️" : "🤍"}
</button>

{/* HEADER */}

<div className="card-header">

<img
src={`https://i.pravatar.cc/60?img=${p.id}`}
alt="client"
/>

<div>

<h3 className="project-title">{p.title}</h3>

<p className="project-country">{p.country}</p>

</div>

</div>

{/* SKILLS */}

<div className="skill-tags">

{Array.isArray(p.skills)
? p.skills.map((s,i)=>(
<span key={i} className="tag">{s}</span>
))
: <span className="tag">{p.skills}</span>
}

</div>

<p className="project-info">
Budget: <b>{p.budget}</b>
</p>

<p className="project-info">
Urgency: <span className="urgency">{p.urgency}</span>
</p>

<p className="rating">
⭐ {rating} Client Rating
</p>

{/* MATCH BAR */}

<div className="match-box">

<p>Match Score {match}%</p>

<div className="match-bar">

<div
className="match-fill"
style={{width:`${match}%`}}
></div>

</div>

</div>

<Link to={`/project/${p.id}`}>
<button className="view-btn">
View Details
</button>
</Link>

</div>

)

})}

</div>

</div>

</div>

)

}

export default Marketplace