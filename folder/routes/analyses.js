const express = require("express");
const router = express.Router();

const orbitalTracking = require("../agents/orbitalTracking");
const collisionPrediction = require("../agents/collisionPrediction");
const riskAnalysis = require("../agents/riskAnalysis");
const missionPlanner = require("../agents/missionPlanner");
const missionCommander = require("../agents/missionCommander");

router.post("/", async (req, res) => {

    const debris = req.body;

    const orbit = orbitalTracking(debris);

    const collision = collisionPrediction(orbit);

    const risk = riskAnalysis(collision);

    const mission = missionPlanner(risk);

    const report = missionCommander(mission);

    res.json(report);

});

module.exports = router;