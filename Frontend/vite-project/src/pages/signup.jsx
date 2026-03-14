import { useState } from "react"
import { useNavigate } from "react-router-dom"

function Signup(){

const navigate = useNavigate()

const [role,setRole] = useState("client")
const [name,setName] = useState("")
const [email,setEmail] = useState("")
const [password,setPassword] = useState("")
const [confirm,setConfirm] = useState("")
const [showPass,setShowPass] = useState(false)
const [terms,setTerms] = useState(false)
const [error,setError] = useState("")

function handleSignup(e){

e.preventDefault()

if(name.length < 3){
setError("Name must be at least 3 characters")
return
}

if(!email.includes("@")){
setError("Enter a valid email")
return
}

if(password.length < 6){
setError("Password must be at least 6 characters")
return
}

if(password !== confirm){
setError("Passwords do not match")
return
}

if(!terms){
setError("Please accept Terms & Conditions to continue")
return
}

setError("")

alert("Signup Successful 🎉")

navigate("/dashboard")

}

return(

<div className="signup-container">

<div className="signup-left">

<h1>Join Spartan Tech Marketplace</h1>

<p>
Create an account to hire developers or start working on global projects.
</p>

<img
src="https://cdn-icons-png.flaticon.com/512/1055/1055687.png"
/>

</div>


<div className="signup-right">

<form className="signup-form" onSubmit={handleSignup}>

<h2>Create Account</h2>

<div className="user-type">

<button
type="button"
className={role==="client" ? "active":""}
onClick={()=>setRole("client")}
>
Client
</button>

<button
type="button"
className={role==="developer" ? "active":""}
onClick={()=>setRole("developer")}
>
Developer
</button>

</div>


<input
type="text"
placeholder="Full Name"
value={name}
onChange={(e)=>setName(e.target.value)}
/>

<input
type="email"
placeholder="Email address"
value={email}
onChange={(e)=>setEmail(e.target.value)}
/>


<div className="password-box">

<input
type={showPass ? "text":"password"}
placeholder="Password"
value={password}
onChange={(e)=>setPassword(e.target.value)}
/>

<span onClick={()=>setShowPass(!showPass)}>👁</span>

</div>


<input
type="password"
placeholder="Confirm password"
value={confirm}
onChange={(e)=>setConfirm(e.target.value)}
/>


<label className="terms">

<input
type="checkbox"
checked={terms}
onChange={(e)=>setTerms(e.target.checked)}
/>

I agree to the Terms & Conditions

</label>


{error && <p className="error">{error}</p>}


<button className="signup-btn-main">
Create Account
</button>

</form>

</div>

</div>

)


}

export default Signup