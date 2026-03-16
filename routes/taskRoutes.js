const express = require("express");
const {
  createTask,
  getTasks,
  getTaskById,
  updateTask,
  deleteTask
} = require("../controllers/taskController");

const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

// Protect ALL routes below
router.use(protect);

// POST /tasks
// GET /tasks
router.route("/")
  .post(createTask)
  .get(getTasks);

// GET /tasks/:id
// PUT /tasks/:id
// DELETE /tasks/:id
router.route("/:id")
  .get(getTaskById)
  .put(updateTask)
  .delete(deleteTask);

module.exports = router;