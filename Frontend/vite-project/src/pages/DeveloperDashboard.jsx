import "../style.css"
import { useEffect, useState } from "react"

function DeveloperDashboard(){

const [developer,setDeveloper] = useState(null)

useEffect(()=>{

const data = JSON.parse(localStorage.getItem("developer"))

if(data){
setDeveloper(data)
}

},[])

if(!developer){
return <p style={{padding:"40px"}}>No developer data found</p>
}

return(

<div className="dev-dashboard">

<div className="dev-header">

<div className="dev-profile">

<div className="avatar">
{developer.name.charAt(0)}
</div>

<div>

<h2>{developer.name}</h2>

<p>
Platform Member • {developer.skill} • {developer.experience} yrs exp • {developer.country}
</p>

</div>

</div>

<button className="browse-btn">
Browse Projects →
</button>

</div>


<div className="dev-stats">

<div className="stat-card">
<p>Applications Sent</p>
<h3>0</h3>
</div>

<div className="stat-card">
<p>Projects Completed</p>
<h3>0</h3>
</div>

<div className="stat-card">
<p>Total Earned</p>
<h3>$0</h3>
</div>

<div className="stat-card">
<p>My Rating</p>
<h3>0 ⭐</h3>
</div>

</div>

</div>

)

}

export default DeveloperDashboard