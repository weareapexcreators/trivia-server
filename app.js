const express = require("express");
const cors = require("cors");
const routes = require("./routes");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", routes);

app.use("*", (req, res) => {
  res.status(404).json({ message: "Routes not found" });
});

module.exports = app;
