function matchingEngine(project, developers){

const scoredDevelopers = developers.map(dev => {

let skillMatch = dev.skills.some(skill =>
project.skills.includes(skill)
) ? 40 : 10

let experienceScore = Math.min(dev.experience * 4,20)

let ratingScore = dev.rating * 6

let onTimeScore = dev.onTime ? 10 : 5

let totalScore = skillMatch + experienceScore + ratingScore + onTimeScore

return {
...dev,
score: totalScore
}

})

scoredDevelopers.sort((a,b)=>b.score-a.score)

return scoredDevelopers.slice(0,5)

}

export default matchingEngine