const router = require("express").Router();
const task = require("../../controllers/task-controller");

// =====================================
//     /api/task   =====================
// =====================================
router.route("https://jumble-dash.herokuapp.com/")
  .post(task.create);

router.route("https://jumble-dash.herokuapp.com/:id")
    .get(task.findAll)
    .put(task.update)
    .delete(task.remove);
	
module.exports = router;