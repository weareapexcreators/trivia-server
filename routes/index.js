const router = require("express").Router();
const v1Router = require("./api/v1/question.route");

// API Version 1
router.use("/v1/question", v1Router);

module.exports = router;
