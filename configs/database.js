const mongoose = require("mongoose");
const { MONGODB_URI } = require("./index.js");

module.exports = async () => {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log("Database connected");
  } catch (error) {
    console.log(error);
  }
};
