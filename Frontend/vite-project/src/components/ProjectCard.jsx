import { Link } from "react-router-dom"

function ProjectCard({project}){

return(

<div className="card">

<h3>{project.title}</h3>

<p><b>Skills:</b> {project.skills}</p>

<p><b>Budget:</b> ${project.budget}</p>

<p><b>Country:</b> {project.country}</p>

<p><b>Urgency:</b> {project.urgency}</p>

<Link to={`/project/${project.id}`}>
<button>View Details</button>
</Link>

</div>

)

}

export default ProjectCard