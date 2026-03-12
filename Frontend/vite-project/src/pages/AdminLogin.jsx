import { useState } from "react"
import { useNavigate } from "react-router-dom"

function AdminLogin(){

const navigate = useNavigate()

const [email,setEmail] = useState("")
const [password,setPassword] = useState("")

function handleSubmit(e){

e.preventDefault()

if(email==="admin@spartan.com" && password==="admin123"){

localStorage.setItem("adminAuth","true")
navigate("/dashboard")

}else{

alert("Invalid Admin Credentials")

}

}

return(

<div className="admin-login-container">

{/* LEFT SIDE */}

<div className="admin-login-left">

<h1>Admin Control Panel 🚀</h1>

<p>
Manage the entire Spartan Tech Marketplace platform.
Monitor developers, projects, analytics and platform
performance through the secure admin dashboard.
</p>

<div className="illustration-card">

<img
src="https://cdn-icons-png.flaticon.com/512/9068/9068677.png"
alt="Admin Dashboard"
style={{width:"200px"}}
/>

</div>

</div>


{/* RIGHT SIDE */}

<div className="admin-login-right">

<h2>Admin Login</h2>

<form onSubmit={handleSubmit}>

<input
type="email"
placeholder="Admin Email (example: admin@spartan.com)"
value={email}
onChange={(e)=>setEmail(e.target.value)}
required
/>

<input
type="password"
placeholder="Admin Password"
value={password}
onChange={(e)=>setPassword(e.target.value)}
required
/>

<button type="submit">
Login to Admin Dashboard
</button>

</form>

<p className="demo-text">
Demo Credentials → admin@spartan.com / admin123
</p>

</div>

</div>

)

}

export default AdminLogin