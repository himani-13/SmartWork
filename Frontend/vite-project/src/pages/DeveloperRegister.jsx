import { useState } from "react"
import { useNavigate } from "react-router-dom"

function DeveloperRegister(){

const navigate = useNavigate()

const [name,setName] = useState("")
const [email,setEmail] = useState("")
const [country,setCountry] = useState("")
const [skill,setSkill] = useState("")

function handleSubmit(e){

e.preventDefault()

const newUser = {
name,
email,
country,
skill
}

const users = JSON.parse(localStorage.getItem("users")) || []

users.push(newUser)

localStorage.setItem("users", JSON.stringify(users))

alert("Developer Registered")

navigate("/admin/users")

}

return(

<div className="register-container">

<h1>Join as Developer</h1>

<form className="register-form" onSubmit={handleSubmit}>

<input
placeholder="Full Name"
value={name}
onChange={(e)=>setName(e.target.value)}
required
/>

<input
placeholder="Email"
value={email}
onChange={(e)=>setEmail(e.target.value)}
required
/>

<input
placeholder="Country"
value={country}
onChange={(e)=>setCountry(e.target.value)}
required
/>

<input
placeholder="Primary Skill"
value={skill}
onChange={(e)=>setSkill(e.target.value)}
required
/>

<button>Register</button>

</form>

</div>

)

}

export default DeveloperRegister