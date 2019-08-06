const router = require("express").Router();
const project = require("../../controllers/project-controller");

// =====================================
//     /api/project   ==================
// =====================================
router.route("https://jumble-dash.herokuapp.com/")
  .get(project.findAll)
  .post(project.create);

router.route("https://jumble-dash.herokuapp.com/:id")
    .get(project.findOne)
    .put(project.update)
    .delete(project.remove);
	
module.exports = router;