const router = require("express").Router();
const {
  getTasks,
  addTask,
  deleteTask,
} = require("../controllers/taskController");
const authMiddleware = require("../middlewares/auth");

router.get("/", authMiddleware, getTasks);
router.post("/", authMiddleware, addTask);
router.delete("/:id", authMiddleware, deleteTask);

module.exports = router;
