import developers from "../data/developers"
import calculateMatchingScore from "./matchingEngine"

function getRecommendations(project){

const results = developers.map(dev=>{

return {
...dev,
score: calculateMatchingScore(project,dev)
}

})

results.sort((a,b)=>b.score-a.score)

return results.slice(0,5)

}

export default getRecommendations