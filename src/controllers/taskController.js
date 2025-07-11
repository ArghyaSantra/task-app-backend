const Task = require("../models/Task");

exports.getTasks = async (req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
};

exports.addTask = async (req, res) => {
  const task = new Task(req.body);
  await task.save();
  res.json(task);
};

exports.deleteTask = async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted successfully" });
};

exports.pendingAssignments = async (req, res) => {
  //await Task.findByIdAndDelete(req.params.id);
  //res.json({ message: "Deleted successfully" });
};
