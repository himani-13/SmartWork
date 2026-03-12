import { useParams } from "react-router-dom"
import projects from "../data/projects"
import "../style.css"

import getRecommendations from "../utils/getRecommendations"

const recommended = getRecommendations(project)

function ProjectDetails(){

const { id } = useParams()
const project = projects.find(p => p.id === Number(id))

if(!project){
return <h2>Project not found</h2>
}

return(

<div className="project-page">

<div className="project-container">

{/* LEFT SIDE */}

<div className="project-main">

<h1>{project.title}</h1>

<div className="project-meta">

<span>💰 {project.budget}</span>
<span>🌍 {project.country}</span>
<span>⏱ {project.duration}</span>

</div>

<div className="project-box">

<h3>Description</h3>

<p>{project.description}</p>

</div>

<div className="project-box">

<h3>Required Skills</h3>

<div className="skills">

{project.skills.map((skill,i)=>(
<span key={i} className="skill-pill">
{skill}
</span>
))}

</div>

</div>

</div>


{/* RIGHT SIDE */}

<div className="project-sidebar">

<div className="apply-card">

<h3>Project Summary</h3>

<p><strong>Client Rating:</strong> ⭐ {project.rating}</p>

<p><strong>AI Match:</strong> {Math.floor(Math.random()*20)+80}%</p>

<p><strong>Platform:</strong> {project.platform}</p>

<a 
href={project.website}
target="_blank"
rel="noopener noreferrer"
className="visit-btn"
>
Visit Website
</a>

<button className="apply-btn">
Apply for Project
</button>

</div>

</div>

</div>

</div>

)

}

export default ProjectDetails