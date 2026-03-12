import React from "react"
import { useParams } from "react-router-dom"

function ProjectDetails(){

const { id } = useParams()

const projects = [
{
id:1,
title:"AI Chatbot System",
description:"Build an AI chatbot using NLP",
budget:"$2000"
},
{
id:2,
title:"Ecommerce Website",
description:"Create a modern ecommerce platform",
budget:"$3000"
},
{
id:3,
title:"Mobile Banking App",
description:"Develop a secure fintech mobile app",
budget:"$5000"
}
]

const project = projects.find(p => p.id === Number(id))

if(!project){
return <h2 style={{padding:"40px"}}>Project Not Found</h2>
}

return(

<div style={{padding:"40px"}}>

<h1>{project.title}</h1>

<p>{project.description}</p>

<h3>Budget: {project.budget}</h3>

</div>

)

}

export default ProjectDetails