const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const ingredientsRoutes = require('./app/routes/ingredients.route');
const app = express();

app.use(cors());

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

require("./app/config/db.config");

// user api
app.use("/api", ingredientsRoutes);

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to staff application." });
});

// set port, listen for requests
const PORT = process.env.PORT || 5432;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
