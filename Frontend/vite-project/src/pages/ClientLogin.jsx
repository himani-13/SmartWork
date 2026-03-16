import { useState } from "react"
import { useNavigate } from "react-router-dom"
import "../style.css"

function ClientLogin(){

const navigate = useNavigate()

const [email,setEmail] = useState("")
const [password,setPassword] = useState("")

const handleLogin = () => {

if(email === "admin@spartan.com" && password === "123456"){

navigate("/client-dashboard")

}else{

alert("Invalid login")

}

}

return(

<div className="login-page">

<div className="login-card">

<h2>Client Login</h2>

<p className="login-subtitle">
Access your Spartan Tech workspace
</p>

<input
type="email"
placeholder="Enter email"
value={email}
onChange={(e)=>setEmail(e.target.value)}
/>

<input
type="password"
placeholder="Enter password"
value={password}
onChange={(e)=>setPassword(e.target.value)}
/>

<button onClick={handleLogin}>
Login
</button>

</div>

</div>

)

}

export default ClientLogin
