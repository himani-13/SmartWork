function calculateMatchingScore(project, developer){

let skillMatch = 0

project.skills.forEach(skill=>{
if(developer.skills.includes(skill)){
skillMatch += 1
}
})

skillMatch = (skillMatch / project.skills.length) * 100

let experienceScore = Math.min((developer.experience / 10) * 100,100)

let ratingScore = (developer.rating / 5) * 100

let deliveryScore = developer.onTimeDelivery

let finalScore =
(skillMatch * 0.4) +
(experienceScore * 0.2) +
(ratingScore * 0.3) +
(deliveryScore * 0.1)

return Math.round(finalScore)

}

export default calculateMatchingScore