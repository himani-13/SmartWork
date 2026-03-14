import { useParams } from "react-router-dom"

function UserDetails(){

const { id } = useParams()

const users = [

{ name:"Rahul Sharma", role:"Developer", location:"India", email:"rahul.sharma@smartdev.com", joined:"Jan 2026", status:"Active" },
{ name:"Ankit Verma", role:"Developer", location:"USA", email:"ankit.verma@smartdev.com", joined:"Feb 2026", status:"Active" },
{ name:"Priya Patel", role:"Developer", location:"Germany", email:"priya.patel@smartdev.com", joined:"Dec 2025", status:"Active" },
{ name:"Ravi Mehta", role:"Developer", location:"Singapore", email:"ravi.mehta@smartdev.com", joined:"Nov 2025", status:"Active" },
{ name:"Arjun Mehra", role:"Developer", location:"Australia", email:"arjun.mehra@smartdev.com", joined:"Jan 2026", status:"Active" },

{ name:"Aman Shah", role:"Client", location:"India", email:"aman.shah@smartdev.com", joined:"Mar 2026", status:"Active" },
{ name:"Ritika Jain", role:"Client", location:"UK", email:"ritika.jain@smartdev.com", joined:"Apr 2026", status:"Active" },
{ name:"Karan Malhotra", role:"Client", location:"USA", email:"karan.malhotra@smartdev.com", joined:"Feb 2026", status:"Active" },
{ name:"Neha Kapoor", role:"Client", location:"Canada", email:"neha.kapoor@smartdev.com", joined:"Jan 2026", status:"Active" },
{ name:"Vikram Singh", role:"Client", location:"Netherlands", email:"vikram.singh@smartdev.com", joined:"Mar 2026", status:"Active" }

]

const user = users[id]

return(

<div className="user-details-container">

<h1 className="user-details-title">User Details</h1>

<div className="user-details-card">

{/* Avatar with active dot */}

<div className="user-avatar-wrapper">

<div className="user-avatar-big">
{user.name.charAt(0)}
</div>

<span className="active-dot-profile"></span>

</div>

<h2 className="user-name">{user.name}</h2>

<div className="user-info-grid">

<p><strong>Email:</strong> {user.email}</p>

<p><strong>Role:</strong> {user.role}</p>

<p><strong>Location:</strong> {user.location}</p>

<p><strong>Joined:</strong> {user.joined}</p>

</div>

{/* Center Status */}

<div className="user-status-center">

<strong>Status:</strong>

<span className="status-active">{user.status}</span>

</div>

</div>

</div>

)

}

export default UserDetails