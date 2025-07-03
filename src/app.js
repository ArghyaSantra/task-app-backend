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

app.use("/api/tasks", require("./routes/tasks"));

app.listen(process.env.PORT || 5000, () => {
  console.log(`Server running on port ${process.env.PORT || 5000}`);
});
