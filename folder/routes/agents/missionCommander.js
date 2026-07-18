module.exports = function missionCommander(plan){

    return{

        missionStatus:"READY",

        cleanupPriority:plan.cleanupPriority,

        fuel:plan.fuelRequired,

        recommendation:plan.recommendation,

        successProbability:"94%"

    }

}