const router = require("express").Router();

const UserRoutes 	 = require("./user");
const AccountRoutes  = require("./account");
const ProjectRoutes  = require("./project");
const BudgetRoutes   = require("./budget");
const TaskRoutes 	 = require("./task");
const AssigneeRoutes = require("./assignee");

router.use("https://jumble-dash.herokuapp.com/user", UserRoutes);
router.use("https://jumble-dash.herokuapp.com/account", AccountRoutes);
router.use("https://jumble-dash.herokuapp.com/project", ProjectRoutes);
router.use("https://jumble-dash.herokuapp.com/budget", BudgetRoutes);
router.use("https://jumble-dash.herokuapp.com/task", TaskRoutes);
router.use("https://jumble-dash.herokuapp.com/assignee", AssigneeRoutes);

module.exports = router;