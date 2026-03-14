import { useEffect, useState } from "react"
import "../style.css"

function Profile(){

const [users,setUsers] = useState([])

useEffect(()=>{

const savedUsers = JSON.parse(localStorage.getItem("users")) || []

setUsers(savedUsers)

},[])

const clients = users.filter(user => user.role === "client")
const developers = users.filter(user => user.role === "developer")

return(

<div className="profilePage">

<div className="profileContainer">

<h1 className="profileTitle">User Profiles</h1>


{/* CLIENTS */}

<h2 className="profileHeading">Clients</h2>

<div className="profileGrid">

{clients.map(user =>(

<div className="profileCard" key={user.id}>

<div className="profileAvatar">
{user.name.charAt(0)}
</div>

<h3>{user.name}</h3>

<p className="profileEmail">{user.email}</p>

<span className="roleTag clientTag">
Client
</span>

</div>

))}

</div>


{/* DEVELOPERS */}

<h2 className="profileHeading">Developers</h2>

<div className="profileGrid">

{developers.map(user =>(

<div className="profileCard devCard" key={user.id}>

<div className="profileAvatar">
{user.name.charAt(0)}
</div>

<h3>{user.name}</h3>

<p className="profileEmail">{user.email}</p>

{user.skills && (
<p className="profileSkills">
💻 {user.skills}
</p>
)}

{user.experience && (
<p className="profileExp">
⭐ {user.experience} years experience
</p>
)}

<span className="roleTag devTag">
Developer
</span>

</div>

))}

</div>

</div>

</div>

)

}

export default Profile