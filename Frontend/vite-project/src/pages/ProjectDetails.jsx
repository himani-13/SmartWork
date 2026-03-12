import { useParams } from "react-router-dom"
import projects from "../data/projects"

function ProjectDetails(){

const { id } = useParams()

const project = projects.find(p => p.id === Number(id))

if(!project){
return <h2>Project not found</h2>
}

return(

<div className="details-container">

{/* LEFT SIDE */}

<div className="details-left">

<h1 className="project-title">{project.title}</h1>

<div className="project-meta">
<span>💰 {project.budget}</span>
<span>🌍 {project.country}</span>
<span>⚡ {project.urgency}</span>
<span>⏱ {project.duration}</span>
</div>

<div className="details-card">
<h3>Description</h3>
<p>{project.description}</p>
</div>

<div className="details-card">
<h3>Required Skills</h3>

<div className="skill-tags">
{project.skills.map((skill,index)=>(
<span className="skill-tag" key={index}>
{skill}
</span>
))}
</div>

</div>

</div>


{/* RIGHT SIDEBAR */}

<div className="details-right">

<div className="sidebar-card">

<h3>Project Summary</h3>

<p><strong>Client Rating:</strong> ⭐ {project.rating}</p>

<p>
<strong>AI Match:</strong> {Math.floor(Math.random()*20)+80}%
</p>

<p>
<strong>Platform:</strong> {project.platform}
</p>

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

)

}

export default ProjectDetails