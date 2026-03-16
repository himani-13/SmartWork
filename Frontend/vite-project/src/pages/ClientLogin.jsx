import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function ClientLogin(){

const navigate = useNavigate()

const [email,setEmail] = useState("")
const [password,setPassword] = useState("")

const handleLogin = (e) =>{

e.preventDefault()

if(email === "" || password === ""){
alert("Please fill all fields")
return
}

alert("Login Successful")

navigate("/client-dashboard")

}

return(

<div className="login-box">

<h2>Sign in to your account</h2>

<input 
type="email"
placeholder="Work Email"
value={email}
onChange={(e)=>setEmail(e.target.value)}
/>

<input 
type="password"
placeholder="Password"
value={password}
onChange={(e)=>setPassword(e.target.value)}
/>

<button 
className="login-btn"
onClick={handleLogin}
>
Sign In
</button>

</div>

)

}

export default ClientLogin


