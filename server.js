/* Importul librariilor necesare */
const express = require("express");
const mongoose = require("mongoose");

const path = require("path");
require('dotenv').config();

const authRoutes = require("./routes/auth");
const mealRoutes = require("./routes/meal");
const cartRoutes = require("./routes/cart");
const orderRoutes = require("./routes/order");

/* Aducerea aplicatiei express si folosirea acesteia */
const app = express();
app.use(express.json());

/* Importul API-urilor folosite */
app.use("/api", authRoutes);
app.use("/api", mealRoutes);
app.use("/api", cartRoutes);
app.use("/api", orderRoutes);

/* Verificarea daca API-ul functioneaza */
app.get("/", function (req, res) {
  res.send("API is running....");
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

/* Conexiunea la baza de date */
const dbURI = process.env.DB_URI;
const port = process.env.PORT || 4000;

mongoose
  .connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((result) => app.listen(port))
  .catch((err) => console.log(err));

/* mongoose
  .connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then((result) => app.listen(port))
  .catch((err) => console.log(err));
 */
