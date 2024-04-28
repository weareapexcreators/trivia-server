require("dotenv").config();
const app = require("./app");
const database = require("./configs/database");

const PORT = process.env.PORT || 3000;

try {
  database();
} catch (error) {
  console.error(error);
} finally {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}
