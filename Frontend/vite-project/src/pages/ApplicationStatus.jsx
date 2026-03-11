function ApplicationStatus(){

const applications = [

{
project:"React Website",
status:"Applied"
},

{
project:"Mobile App",
status:"Shortlisted"
},

{
project:"Ecommerce Platform",
status:"Rejected"
},

{
project:"AI Project",
status:"Awarded"
}

]

function getStatusClass(status){

if(status==="Applied") return "status-applied"
if(status==="Shortlisted") return "status-shortlisted"
if(status==="Rejected") return "status-rejected"
if(status==="Awarded") return "status-awarded"

}

return(

<div className="status-container">

<h1>My Applications</h1>

{applications.map((a,i)=>(

<div className="status-card" key={i}>

<h3>{a.project}</h3>

<p className={getStatusClass(a.status)}>
{a.status}
</p>

</div>

))}

</div>

)

}

export default ApplicationStatus