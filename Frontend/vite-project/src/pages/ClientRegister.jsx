import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function ClientRegister(){

const navigate = useNavigate()

const [name,setName] = useState("")
const [email,setEmail] = useState("")
const [password,setPassword] = useState("")

const handleRegister = ()=>{

if(name === "" || email === "" || password === ""){
alert("Fill all fields")
return
}

const user = {name,email,password}

localStorage.setItem("clientUser",JSON.stringify(user))

alert("Registration Successful")

navigate("/client-login")

}

return(

<div className="form-container">

<h2>Client Registration</h2>

<input
placeholder="Full Name"
value={name}
onChange={(e)=>setName(e.target.value)}
/>

<input
placeholder="Email"
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
className="primary-btn"
onClick={handleRegister}
>
Register
</button>

</div>

)

}

export default ClientRegister