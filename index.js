const express = require("express");
const app = express();
const database = require("./src/database");
const routes = require("./src/controllers/routes");

const port = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", routes);

database(process.env.MONGO_DB_CONNECTION_STRING)
  .then(() => {
    app.listen(port, () => {
      console.log("run sample express app");
    });
  })
  .catch((err) => {
    console.log(err);
  });
