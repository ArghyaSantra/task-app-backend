const router = require("express").Router();
const {
  getTasks,
  addTask,
  deleteTask,
} = require("../controllers/taskController");

router.get("/", getTasks);
router.post("/", addTask);
router.delete("/:id", deleteTask);

module.exports = router;
