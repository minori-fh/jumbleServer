const router = require("express").Router();
const assignee = require("../../controllers/assignee-controller");

// =====================================
//     /api/assignee   =================
// =====================================
router.route("https://jumble-dash.herokuapp.com/")
    .post(assignee.create);

router.route("/:id")
    .get(assignee.findAll)
    .put(assignee.update)
    .delete(assignee.remove);

module.exports = router;