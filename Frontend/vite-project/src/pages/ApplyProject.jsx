import { useParams, useNavigate } from "react-router-dom"
import { useState } from "react"
import projects from "../data/projects"

function ApplyProject(){

const { id } = useParams()
const navigate = useNavigate()

const project = projects.find(p => p.id === Number(id))

const [proposal,setProposal] = useState("")
const [days,setDays] = useState("")
const [portfolio,setPortfolio] = useState("")

/* Project not found protection */

if(!project){
return(
<div style={{padding:"60px"}}>
<h2>Project Not Found</h2>
</div>
)
}

function handleSubmit(e){

e.preventDefault()

alert("Application Submitted Successfully 🚀")

/* Clear form */

setProposal("")
setDays("")
setPortfolio("")

/* Redirect to marketplace */

navigate("/marketplace")

}

return(

<div className="apply-container">

<h2>Apply for: {project.title}</h2>

<form className="apply-form" onSubmit={handleSubmit}>

<label>Proposal / Cover Letter</label>

<textarea
placeholder="Describe how you will complete this project..."
value={proposal}
onChange={(e)=>setProposal(e.target.value)}
required
/>

<label>Expected Delivery Days</label>

<input
type="number"
placeholder="Enter days"
value={days}
onChange={(e)=>setDays(e.target.value)}
required
/>

<label>Portfolio Link (Optional)</label>

<input
type="text"
placeholder="https://yourportfolio.com"
value={portfolio}
onChange={(e)=>setPortfolio(e.target.value)}
/>

<button type="submit" className="submit-btn">
Submit Application
</button>

</form>

</div>

)

}

export default ApplyProject