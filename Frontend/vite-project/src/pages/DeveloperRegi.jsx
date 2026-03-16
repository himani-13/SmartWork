import "../style.css"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

function DeveloperRegi(){

const navigate = useNavigate()

const [step,setStep] = useState(1)

/* BASIC INFO */

const [name,setName] = useState("")
const [email,setEmail] = useState("")
const [country,setCountry] = useState("")

/* SKILLS */

const [skill,setSkill] = useState("")
const [experience,setExperience] = useState("")
const [otherSkills,setOtherSkills] = useState("")
const [bio,setBio] = useState("")

/* SECURITY */

const [password,setPassword] = useState("")
const [confirmPassword,setConfirmPassword] = useState("")


function nextStep(e){
e.preventDefault()
setStep(step+1)
}

function prevStep(){
setStep(step-1)
}

function createAccount(e){
e.preventDefault()

if(password !== confirmPassword){
alert("Passwords do not match")
return
}

/* SAVE DATA */

const developerData = {
name,
email,
country,
skill,
experience,
otherSkills,
bio
}

localStorage.setItem("developer", JSON.stringify(developerData))

setStep(4)
}

return(

<div className="register-page">

<div className="register-box">

<p className="tag">DEVELOPER REGISTRATION</p>

<h2>Create your profile</h2>

<div className="steps">
<span className={step>=1?"active":""}>1 Basic Info</span>
<span className={step>=2?"active":""}>2 Skills</span>
<span className={step>=3?"active":""}>3 Security</span>
</div>


{/* STEP 1 */}

{step===1 && (

<form onSubmit={nextStep}>

<label>Full Name</label>
<input
type="text"
placeholder="e.g. Aiko Tanaka"
value={name}
onChange={(e)=>setName(e.target.value)}
required
/>

<label>Email Address</label>
<input
type="email"
placeholder="you@example.com"
value={email}
onChange={(e)=>setEmail(e.target.value)}
required
/>

<label>Country</label>
<select
value={country}
onChange={(e)=>setCountry(e.target.value)}
required
>
<option value="">Select your country</option>
<option>India</option>
<option>USA</option>
<option>UK</option>
<option>Canada</option>
</select>

<button className="continue-btn">
Continue →
</button>

</form>

)}


{/* STEP 2 */}

{step===2 && (

<form onSubmit={nextStep}>

<label>Primary Skill</label>
<select
value={skill}
onChange={(e)=>setSkill(e.target.value)}
required
>
<option>Select primary skill</option>
<option>React</option>
<option>Node.js</option>
<option>Python</option>
<option>Java</option>
</select>

<label>Years of Experience</label>
<input
type="number"
placeholder="e.g. 3"
value={experience}
onChange={(e)=>setExperience(e.target.value)}
/>

<label>Other Skills</label>
<input
type="text"
placeholder="React, AWS, Docker..."
value={otherSkills}
onChange={(e)=>setOtherSkills(e.target.value)}
/>

<label>Short Bio</label>
<textarea
placeholder="Tell clients about your expertise..."
value={bio}
onChange={(e)=>setBio(e.target.value)}
/>

<div className="btn-row">

<button type="button" onClick={prevStep} className="back-btn">
Back
</button>

<button className="continue-btn">
Continue →
</button>

</div>

</form>

)}


{/* STEP 3 */}

{step===3 && (

<form onSubmit={createAccount}>

<div className="summary">

<p><b>{name}</b></p>
<p>{skill} • {experience} Years • {country}</p>

</div>

<label>Create Password</label>
<input
type="password"
value={password}
onChange={(e)=>setPassword(e.target.value)}
required
/>

<label>Confirm Password</label>
<input
type="password"
value={confirmPassword}
onChange={(e)=>setConfirmPassword(e.target.value)}
required
/>

<div className="btn-row">

<button type="button" onClick={prevStep} className="back-btn">
Back
</button>

<button className="continue-btn">
Create Developer Account ✓
</button>

</div>

</form>

)}


{/* STEP 4 SUCCESS */}

{step===4 && (

<div className="success">

<div className="success-icon">✓</div>

<h2>You're in, {name} 🎉</h2>

<p>Your developer account is ready.</p>

<button 
className="continue-btn"
onClick={()=>navigate("/developer-dashboard")}
>
Go to Dashboard →
</button>

</div>

)}

</div>

</div>

)

}

export default DeveloperRegi