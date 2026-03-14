import React, { useState } from "react"
import "../style.css"

function PostProject(){

const [title,setTitle]=useState("")
const [description,setDescription]=useState("")
const [budget,setBudget]=useState("")
const [skills,setSkills]=useState("")
const [deadline,setDeadline]=useState("")

const handleSubmit=(e)=>{
e.preventDefault()
alert("Project Submitted Successfully 🚀")
}

return(

<div className="post-wrapper">

<div className="post-left">

<h1>Start Your Project 🚀</h1>

<p>
Tell us what you want to build and our platform
will connect you with the best developers worldwide.
</p>

<img
src="https://cdn.dribbble.com/users/1162077/screenshots/3848914/programmer.gif"
alt="developer"
/>

</div>


<div className="post-right">

<h2>Post Your Project</h2>

<form className="project-form" onSubmit={handleSubmit}>

<input
type="text"
placeholder="Project Title"
value={title}
onChange={(e)=>setTitle(e.target.value)}
required
/>

<textarea
placeholder="Project Description"
value={description}
onChange={(e)=>setDescription(e.target.value)}
required
/>

<input
type="number"
placeholder="Budget ($)"
value={budget}
onChange={(e)=>setBudget(e.target.value)}
required
/>

<input
type="text"
placeholder="Required Skills (React, Node...)"
value={skills}
onChange={(e)=>setSkills(e.target.value)}
required
/>

<input
type="date"
value={deadline}
onChange={(e)=>setDeadline(e.target.value)}
required
/>

<button className="submit-btn">
Post Project
</button>

</form>

</div>

</div>

)

 }

export default PostProject