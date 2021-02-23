const express = require("express");
const router = express.Router();

router.use("/contacts", require("./contact.router"));

module.exports = router;
