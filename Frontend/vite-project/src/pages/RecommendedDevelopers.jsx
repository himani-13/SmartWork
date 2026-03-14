import { developers } from "../data/developers"
import matchingEngine from "../utils/matchingEngine"
import "../style.css"

function RecommendedDevelopers(){

const project = {
skills:["React"]
}

const topDevelopers = matchingEngine(project,developers)

return(

<div className="page-container">

<h2 className="page-title">Top 5 Recommended Developers</h2>

<div className="dev-grid">

{topDevelopers.map(dev => (

<div className="dev-card" key={dev.id}>

<h3>{dev.name}</h3>

<p><b>Skills:</b> {dev.skills.join(", ")}</p>

<p><b>Experience:</b> {dev.experience} years</p>

<p><b>Rating:</b> ⭐ {dev.rating}</p>

<div className="score">

AI Match Score

<div className="progress">

<div
className="progress-bar"
style={{width:`${dev.score}%`}}
></div>

</div>

</div>

<button className="select-btn">
Select Developer
</button>

</div>

))}

</div>

</div>

)

}

export default RecommendedDevelopers