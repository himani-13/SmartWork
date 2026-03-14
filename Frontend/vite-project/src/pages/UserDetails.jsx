import { useParams } from "react-router-dom"

function UserDetails(){

const { id } = useParams()

const users = JSON.parse(localStorage.getItem("users")) || []

const user = users.find(u => String(u.id) === id)

if(!user){
return <h2 style={{padding:"40px"}}>User Not Found</h2>
}

return(

<div className="user-details-container">

<h1 className="user-details-title">User Details</h1>

<div className="user-details-card">

<div className="user-avatar-big">
{user.name.charAt(0)}
</div>

<h2 className="user-name">{user.name}</h2>

<div className="user-info-grid">

<p><strong>Email:</strong> {user.email}</p>

<p><strong>Role:</strong> {user.role}</p>

<p><strong>Location:</strong> {user.location || "Not Added"}</p>

<p><strong>Joined:</strong> {user.joined || "New User"}</p>

<p>
<strong>Status:</strong>
<span className="status-active">
{user.status || "Active"}
</span>
</p>

</div>

</div>

</div>

)

}

export default UserDetails