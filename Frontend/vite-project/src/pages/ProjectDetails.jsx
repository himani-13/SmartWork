import React from "react"
import { useParams } from "react-router-dom"
import { projects } from "../data/projects"
import { developers } from "../data/developers"
import calculateMatchingScore from "../utils/matchingEngine"

function ProjectDetails(){

const { id } = useParams()

const project = projects.find(p => p.id === Number(id))

if(!project){
return <h2>Project not found</h2>
}

const recommended = developers
.map(dev => ({
...dev,
score: calculateMatchingScore(project, dev)
}))
.sort((a,b)=>b.score-a.score)
.slice(0,5)

return(

<div style={{padding:"40px"}}>

<h1>{project.title}</h1>

<h3>Required Skills</h3>
<p>{project.skills.join(", ")}</p>

<h2>Recommended Developers</h2>

{recommended.map(dev => (

<div key={dev.id} style={{
border:"1px solid #ccc",
padding:"15px",
marginBottom:"10px"
}}>

<h3>{dev.name}</h3>
<p>Skills: {dev.skills.join(", ")}</p>
<p>Experience: {dev.experience} years</p>
<p>⭐ Rating: {dev.rating}</p>
<p>Matching Score: {dev.score}%</p>

</div>

))}

</div>

)

}

export default ProjectDetails