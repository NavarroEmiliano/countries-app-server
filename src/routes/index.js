const { Router } = require("express");
const router = Router();

//Handlers
const { getAllCountriesDbHandler } = require("../handlers/getAllCountriesDbHandler");
const { getAllActivitiesDbHandler } = require("../handlers/getAllActivitiesDbHandler");
const { getCountryByIdDbHandler } = require("../handlers/getCountryByIdDbHandler");
const { postActivitiesHandler } = require("../handlers/postActivitiesHandler");
const { deleteActivityHandler } = require("../handlers/deleteActivityHandler");
const { updateActivityHandler } = require("../handlers/updateActivityHandler");

router.get("/countries", getAllCountriesDbHandler);
router.get("/countries/:idPais", getCountryByIdDbHandler);

router.get("/activities", getAllActivitiesDbHandler);
router.post("/activities", postActivitiesHandler);
router.delete("/activities/:id", deleteActivityHandler)
router.put("/activities",updateActivityHandler)


module.exports = router;
