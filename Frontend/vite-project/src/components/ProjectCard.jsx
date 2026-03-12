import { Link } from "react-router-dom"

function ProjectCard({project}){

return(

<div className="project-card">

<div className="header">

<h3>{project.title}</h3>

<span className="budget">
{project.budget}
</span>

</div>

<p className="desc">
{project.description}
</p>

<div className="skills">

{project.skills.map(skill=>(
<span className="tag">{skill}</span>
))}

</div>

<div className="meta">

<span>{project.country}</span>

<span>{project.urgency}</span>

</div>

<div className="actions">

<Link to={`/project/${project.id}`}>

<button className="view">View Details</button>

</Link>

<button className="apply">
Apply
</button>

</div>

</div>

)

}

export default ProjectCard