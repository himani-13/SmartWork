import { useState } from "react"
import { useNavigate } from "react-router-dom"

function ClientLogin(){

const navigate = useNavigate()

const [email,setEmail] = useState("")
const [password,setPassword] = useState("")

const handleLogin = () => {

if(email && password){

localStorage.setItem("role","client")

navigate("/client-dashboard")

}else{

alert("Enter email and password")

}

}

return(

<div className="login-container">

<h2>Client Login</h2>

<input
type="email"
placeholder="Enter Email"
onChange={(e)=>setEmail(e.target.value)}
/>

<input
type="password"
placeholder="Enter Password"
onChange={(e)=>setPassword(e.target.value)}
/>

<button onClick={handleLogin}>
Login
</button>

</div>

)

}

export default ClientLogin
