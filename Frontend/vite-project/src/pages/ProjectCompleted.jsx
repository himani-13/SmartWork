import "../style.css"

const projects = [
{
title:"AI Dashboard",
developer:"John Carter",
rating:5
},
{
title:"Ecommerce Website",
developer:"Maria Lopez",
rating:4
}
]

function ProjectCompleted(){

return(

<div className="page-container">

<h2 className="page-title">Completed Projects</h2>

<div className="project-grid">

{projects.map((project,index)=>(

<div className="project-card" key={index}>

<h3>{project.title}</h3>

<p><b>Developer:</b> {project.developer}</p>

<p>⭐ Rating: {project.rating}</p>

<button className="rate-btn">
Rate Developer
</button>

</div>

))}

</div>

</div>

)

}

export default ProjectCompleted