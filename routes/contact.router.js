const router = require("express").Router();
const contactController = require("../controllers/contact.controller");

router.get("/", contactController.all);
router.get("/:id", contactController.one);
router.post("/new", contactController.register);
router.post("/:id/update", contactController.update);
router.post("/:id/remove", contactController.remove);

module.exports = router;
