import "../style.css"

const applications = [
{
developer:"John Carter",
proposal:"I can build your dashboard in React within 7 days."
},
{
developer:"Maria Lopez",
proposal:"Experienced full stack developer ready to deliver quickly."
},
{
developer:"Ahmed Khan",
proposal:"Strong React experience with fast delivery."
}
]

function Applications(){

return(

<div className="page-container">

<h2 className="page-title">Developer Applications</h2>

<div className="app-grid">

{applications.map((app,index)=>(

<div className="app-card" key={index}>

<h3>{app.developer}</h3>

<p>{app.proposal}</p>

<div className="app-buttons">

<button className="approve">Approve</button>

<button className="reject">Reject</button>

</div>

</div>

))}

</div>

</div>

)

}

export default Applications