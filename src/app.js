const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

// Auth routes
app.use("/api/auth", require("./routes/auth"));

// Task routes
app.use("/api/tasks", require("./routes/tasks"));

// Upload route
app.use("/api/upload", require("./routes/upload"));

// 👇 Add these friendly default routes here
app.get("/", (req, res) => {
  res.send("✅ Task Manager Backend is running");
});

app.get("/api", (req, res) => {
  res.send("✅ API base endpoint — Task Manager Backend");
});

app.listen(process.env.PORT || 5000, () => {
  console.log(`Server running on port ${process.env.PORT || 5000}`);
});
