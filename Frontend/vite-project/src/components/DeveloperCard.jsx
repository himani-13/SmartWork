function DeveloperCard({dev}){

return(

<div className="card">

<h3>{dev.name}</h3>

<p>Primary Skill : {dev.primarySkill}</p>

<p>Experience : {dev.experience} Years</p>

<p>Rating : ⭐ {dev.rating}</p>

<p>On Time Delivery : {dev.delivery}%</p>

</div>

)

}

export default DeveloperCard