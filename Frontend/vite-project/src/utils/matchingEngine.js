export default function calculateMatchingScore(project, developer){

let skillMatch = project.skills.filter(skill =>
developer.skills.includes(skill)
).length

let skillScore = (skillMatch / project.skills.length) * 100

let experienceScore = (developer.experience / 10) * 100

let ratingScore = (developer.rating / 5) * 100

let deliveryScore = developer.onTimeDelivery

let totalScore =
(skillScore * 0.4) +
(experienceScore * 0.2) +
(ratingScore * 0.3) +
(deliveryScore * 0.1)

return Math.round(totalScore)

}