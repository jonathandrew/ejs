const express = require("Express");
const logger = require("morgan");
const app = express();
const path = require("path");
const user = require("./models/User.json");

require("dotenv").config();
const port = process.env.PORT || 3000;

app.use(logger("dev"));
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.get("/first", (req, res) => {
  res.render("main/home", { name: "Bill" });
});

app.get("/location/:color/:car", (req, res) => {
  const firstName = "Tom";
  const lastName = "James";
  let places = [
    { city: "Stamford", state: "Connecticut" },
    { city: "Rockvelle", state: "Maryland" },
    { city: "Barnard", state: "Arizona" }
  ];
  const { color, car } = req.params;
  res.render("main/location", { color, car, places, firstName, lastName });
});
app.get("/users", (req, res) => {
  res.render("main/user", { user });
});

app.listen(port, () => {
  console.log(`port is running on ${port}`);
});
