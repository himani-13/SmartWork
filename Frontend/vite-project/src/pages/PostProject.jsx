import { useState } from "react"
import { useNavigate } from "react-router-dom"

function PostProject(){

const navigate = useNavigate()

const [title,setTitle] = useState("")
const [skills,setSkills] = useState("")
const [budget,setBudget] = useState("")
const [country,setCountry] = useState("")

function handleSubmit(e){

e.preventDefault()

const newProject = {
id: Date.now(),
title,
skills,
budget,
country
}

const existing = JSON.parse(localStorage.getItem("projects")) || []

existing.push(newProject)

localStorage.setItem("projects", JSON.stringify(existing))

alert("Project Posted Successfully 🚀")

navigate("/admin/projects")

}

return(

<div className="post-container">

<h2>Post a New Project</h2>

<form className="project-form" onSubmit={handleSubmit}>

<input
placeholder="Project Title"
value={title}
onChange={(e)=>setTitle(e.target.value)}
required
/>

<input
placeholder="Skills (React,Node)"
value={skills}
onChange={(e)=>setSkills(e.target.value)}
required
/>

<input
placeholder="Budget"
value={budget}
onChange={(e)=>setBudget(e.target.value)}
required
/>

<input
placeholder="Country"
value={country}
onChange={(e)=>setCountry(e.target.value)}
required
/>

<button className="submit-btn">
Post Project
</button>

</form>

</div>

)

}

export default PostProject