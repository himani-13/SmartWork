import { useState } from "react"
import { Link } from "react-router-dom"
import projects from "../data/projects"

function Marketplace(){

const [country,setCountry] = useState("")
const [skill,setSkill] = useState("")

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

<div className="marketplace-container">

<h1 className="marketplace-title">Project Marketplace</h1>

{/* FILTER BAR */}

<div className="filter-bar">

<select
value={country}
onChange={(e)=>setCountry(e.target.value)}
>

<option value="">All Countries</option>
<option value="USA">USA</option>
<option value="India">India</option>
<option value="UK">UK</option>

</select>

<input
type="text"
placeholder="Search Skills (React, AI, Python...)"
value={skill}
onChange={(e)=>setSkill(e.target.value)}
/>

</div>

{/* PROJECT GRID */}

<div className="project-grid">

{filtered.map(p => (

<div className="project-card" key={p.id}>

<h3 className="project-title">{p.title}</h3>

<p className="project-info">
<b>Skills:</b> {p.skills}
</p>

<p className="project-info">
<b>Budget:</b> {p.budget}
</p>

<p className="project-info">
<b>Country:</b> {p.country}
</p>

<p className="project-info">
<b>Urgency:</b> {p.urgency}
</p>

<p className="project-info">
<b>Posted:</b> {p.date}
</p>

{/* Example Smart Matching Score */}

<p className="matching-score">
Match Score: {Math.floor(Math.random()*40)+60}%
</p>

<Link to={`/project/${p.id}`}>
<button className="view-btn">
View Details
</button>
</Link>

</div>

))}

</div>

</div>

)

}

export default Marketplace