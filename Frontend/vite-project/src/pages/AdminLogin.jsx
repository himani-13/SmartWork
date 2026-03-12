import { useState } from "react"
import { useNavigate } from "react-router-dom"

function AdminLogin(){

const navigate = useNavigate()

const [email,setEmail] = useState("")
const [password,setPassword] = useState("")
const [confirmPassword,setConfirmPassword] = useState("")
const [showPass,setShowPass] = useState(false)
const [showConfirm,setShowConfirm] = useState(false)
const [error,setError] = useState("")

const correctEmail = "admin@spartan.com"
const correctPassword = "admin123"

function handleSubmit(e){

e.preventDefault()

if(email !== correctEmail){
setError("Invalid admin email")
return
}

if(password !== correctPassword){
setError("Incorrect password")
return
}

if(confirmPassword !== correctPassword){
setError("Passwords do not match")
return
}

localStorage.setItem("adminAuth","true")

navigate("/dashboard")

}

return(

<div className="admin-login-container">

{/* LEFT PANEL */}

<div className="admin-login-left">

<h1>Admin Control Panel</h1>

<p>
Manage developers, projects and analytics through
the secure admin dashboard.
</p>

<div className="illustration-card">

<img
src="https://cdn-icons-png.flaticon.com/512/4140/4140037.png"
alt="admin"
/>

</div>

</div>


{/* RIGHT PANEL */}

<div className="admin-login-right">

<h2>Admin Login</h2>


{/* STEP PROGRESS */}

<div className="progress-steps">

<div className={`progress-line ${email ? "done" : ""}`}></div>

<div className={`progress-line ${password ? "done" : ""}`}></div>

<div className={`progress-line ${confirmPassword ? "done" : ""}`}></div>

</div>


<form className="login-form" onSubmit={handleSubmit}>

<label>Admin Email</label>

<input
type="email"
placeholder="Enter admin email (admin@spartan.com)"
value={email}
onChange={(e)=>{
setEmail(e.target.value)
setError("")
}}
/>


<label>Password</label>

<div className="password-field">

<input
type={showPass ? "text" : "password"}
placeholder="Enter admin password"
value={password}
onChange={(e)=>{
setPassword(e.target.value)
setError("")
}}
/>

<span onClick={()=>setShowPass(!showPass)}>👁</span>

</div>


<label>Confirm Password</label>

<div className="password-field">

<input
type={showConfirm ? "text" : "password"}
placeholder="Confirm admin password"
value={confirmPassword}
onChange={(e)=>{
setConfirmPassword(e.target.value)
setError("")
}}
/>

<span onClick={()=>setShowConfirm(!showConfirm)}>👁</span>

</div>


{error && <p className="error">{error}</p>}

<button type="submit">
Login to Admin Dashboard
</button>

<p className="demo-text">
Demo Credentials → admin@spartan.com / admin123
</p>

</form>

</div>

</div>

)

}

export default AdminLogin