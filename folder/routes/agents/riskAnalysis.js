module.exports = function riskAnalysis(data){

    let score = 0;

    if(data.distance < 200)
        score += 40;

    if(data.velocity > 7)
        score += 30;

    if(data.size > 2)
        score += 30;

    return{
        riskScore:score,
        priority:
            score>70?"HIGH":
            score>40?"MEDIUM":"LOW"
    }

}