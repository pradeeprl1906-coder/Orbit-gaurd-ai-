module.exports = function missionPlanner(risk){

    return{

        cleanupPriority:risk.priority,

        fuelRequired:
            risk.priority==="HIGH"
            ?65:25,

        recommendation:
            risk.priority==="HIGH"
            ?"Remove debris immediately"
            :"Monitor orbit"

    }

}