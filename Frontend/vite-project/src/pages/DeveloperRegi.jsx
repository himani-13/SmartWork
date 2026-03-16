import "../style.css"
import { useState } from "react"

function DeveloperRegi(){

const [name,setName] = useState("")
const [email,setEmail] = useState("")
const [country,setCountry] = useState("")

function handleRegi(e){
e.preventDefault()
alert("Developer Profile Created 🚀")
}

return(

<div className="register-page">

<div className="register-box">

<p className="tag">DEVELOPER REGISTRATION</p>

<h2>Create your profile</h2>

<div className="steps">
<span className="active">1 Basic Info</span>
<span>2 Skills</span>
<span>3 Security</span>
</div>

<form onSubmit={handleRegi}>

<label>Full Name</label>
<input
type="text"
placeholder="e.g. Aiko Tanaka"
value={name}
onChange={(e)=>setName(e.target.value)}
/>

<label>Email Address</label>
<input
type="email"
placeholder="you@example.com"
value={email}
onChange={(e)=>setEmail(e.target.value)}
/>

<label>Country</label>
<select
value={country}
onChange={(e)=>setCountry(e.target.value)}
>
<option>Select your country</option>
<option>India</option>
<option>USA</option>
<option>UK</option>
<option>Canada</option>
</select>

<button className="continue-btn">
Continue →
</button>

</form>

<p className="back-home">← Back to Home</p>

</div>

</div>

)

}

export default DeveloperRegi