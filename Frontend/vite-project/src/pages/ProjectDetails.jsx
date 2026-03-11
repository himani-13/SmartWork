import { useParams } from "react-router-dom"
import projects from "../data/projects"

function ProjectDetails(){

const { id } = useParams()

const project = projects.find(p => p.id === Number(id))

if(!project){
return <h2>Project not found</h2>
}

return(

<div className="project-details-container">

<div className="project-header">
<h1>{project.title}</h1>

<div className="project-meta">
<span>Budget: {project.budget}</span>
<span>Country: {project.country}</span>
<span>Urgency: {project.urgency}</span>
<span>Duration: {project.duration}</span>
</div>

</div>

<div className="project-grid">

<div className="project-box">
<strong>Description</strong>
<p>{project.description}</p>
</div>

<div className="project-box">
<strong>Client Rating</strong>
<p>⭐ {project.rating}</p>
</div>

<div className="project-box">
<strong>Matching Score</strong>
<p>{Math.floor(Math.random()*20)+80}%</p>
</div>

<div className="project-box">
<strong>Platform</strong>
<p>{project.platform}</p>
</div>

</div>

<div className="skill-tags">

{project.skills.map((skill,index)=>(
<span className="skill-tag" key={index}>
{skill}
</span>
))}

</div>

<div className="project-links">

<a href={project.website} target="_blank" rel="noopener noreferrer">
Visit Website
</a>

<a href={project.portfolio} target="_blank" rel="noopener noreferrer">
View Portfolio
</a>

</div>

<button className="apply-btn">
Apply for Project
</button>

</div>

)

}

export default ProjectDetails