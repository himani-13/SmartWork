import { useParams } from "react-router-dom"

function UserDetails(){

const { id } = useParams()

/* GET USERS FROM LOCAL STORAGE */

const users = JSON.parse(localStorage.getItem("users")) || []

/* FIND USER */

const user = users.find(u => String(u.id) === id)

if(!user){
return(
<div style={{padding:"40px",textAlign:"center"}}>
<h2>User Not Found</h2>
<p>This user may have been deleted or does not exist.</p>
</div>
)
}

return(

<div className="user-details-container">

<h1 className="user-details-title">User Details</h1>

<div className="user-details-card">

<div className="user-avatar-big">
{user.name ? user.name.charAt(0) : "U"}
</div>

<h2 className="user-name">{user.name || "Unknown User"}</h2>

<div className="user-info-grid">

<p><strong>Email:</strong> {user.email || "Not Provided"}</p>

<p><strong>Role:</strong> {user.role === "developer" ? "Developer" : "Client"}</p>

<p><strong>Status:</strong> {user.status || "Active"}</p>

<p><strong>Joined:</strong> {user.joined || "New User"}</p>

<p><strong>Location:</strong> {user.location || "Not Added"}</p>

</div>

</div>

</div>

)

}

export default UserDetails