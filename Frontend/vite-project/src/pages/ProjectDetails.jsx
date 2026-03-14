import React from "react"
import { useParams } from "react-router-dom"
import { projects } from "../data/projects"
import { developers } from "../data/developers"
import matchingEngine from "../utils/matchingEngine"

function ProjectDetails(){

const { id } = useParams()

const project = projects.find(p => p.id === Number(id))

if(!project){
return <h2>Project not found</h2>
}

// 🔥 Smart Matching Engine (Top 5 Developers)
const recommended = matchingEngine(project, developers)

return(

<div style={{padding:"40px"}}>

<h1>{project.title}</h1>

<h3>Required Skills</h3>
<p>{project.skills.join(", ")}</p>

<h2>Top 5 Recommended Developers</h2>

{recommended.map(dev => (

<div
key={dev.id}
style={{
border:"1px solid #ddd",
borderRadius:"8px",
padding:"15px",
marginBottom:"12px",
boxShadow:"0 2px 6px rgba(0,0,0,0.1)"
}}
>

<h3>{dev.name}</h3>

<p><b>Skills:</b> {dev.skills.join(", ")}</p>

<p><b>Experience:</b> {dev.experience} years</p>

<p>⭐ <b>Rating:</b> {dev.rating}</p>

<p style={{color:"#2e7d32"}}>
<b>Matching Score:</b> {Math.round(dev.score)}%
</p>

</div>

))}

</div>

)

}

export default ProjectDetails