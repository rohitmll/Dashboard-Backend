const express = require("express");
const controllers = require("../component/controllers");

const router = express.Router();

router.get("/all", controllers.getAllData);

router.get("/year/:year", controllers.filteredByYear);

router.get("/topic/:topic", controllers.filteredByTopic);

router.get("/title/:title", controllers.filteredBYTitle);

router.get("/sector/:sector", controllers.filteredBySector);

router.get("/region/:region", controllers.filteredByRegion);

router.get("/country/:country", controllers.filteredByCountry);

router.get("/intensity/:intensity", controllers.filteredByIntensity);

router.get("/likelihood/:likelihood", controllers.filteredByLikelihood);

router.get("/pest/:pest", controllers.filteredByPestle);

router.get("/source/:source", controllers.filteredBySource);

router.get("/any/:search", controllers.filteredByAny);

module.exports = router;
