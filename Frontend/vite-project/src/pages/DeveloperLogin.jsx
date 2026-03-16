import { useState } from "react"
import { useNavigate } from "react-router-dom"

function DeveloperLogin(){

const navigate = useNavigate()

const [email,setEmail] = useState("")
const [password,setPassword] = useState("")

function handleLogin(e){

e.preventDefault()

/* SIMPLE LOGIN (DEMO PURPOSE) */

if(!email || !password){
alert("Please enter email and password")
return
}

alert("Login Successful 👨‍💻")

navigate("/developer-register")

}

return(

<div className="login-page">

<div className="login-box">

<h3 className="portal-tag">DEVELOPER PORTAL</h3>

<h2>Sign in to your account</h2>

<p>Welcome back! Enter your credentials to continue.</p>

<form onSubmit={handleLogin}>

<input
type="email"
placeholder="Email Address"
value={email}
onChange={(e)=>setEmail(e.target.value)}
required
/>

<input
type="password"
placeholder="Password"
value={password}
onChange={(e)=>setPassword(e.target.value)}
required
/>

<div className="login-options">

<label>
<input type="checkbox"/>
Remember me
</label>

<span className="forgot">
Forgot password?
</span>

</div>

<button className="login-btn">
Sign In →
</button>

</form>

<p className="admin-info">
Admin? Enter admin@spartantech.com
</p>

<p className="back-home">
← Back to Home
</p>

</div>

</div>

)

}

export default DeveloperLogin