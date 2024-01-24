const express = require("express");
const mongoose = require("mongoose");

const routes = require("./component/routes");
const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

const Port = process.env.PORT || 4000;

// Database connection
// connect() --> it's a async function.
mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.kc6eqy5.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`
  )
  .then(() => {
    console.log("MongoDB database is connected!");
  })
  .catch((err) => {
    console.log(err);
  });

/// setting CORS

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin,X-Requested-With,Content-Type,Accept,Authorization"
  );
  res.setHeader("Access-Control-Allow-Method", "GET,POST,PATCH,DELETE");
  next();
});

// route splitting
app.use("/api/data", routes);
// app.use("/api/data", filteredByYear);

// Testing route to see our server is working

// app.get("/", (req, res) => {
//   return res.send(` <div>
//   <ul>
//   <li>Get all data from the database - /api/data</li>
//   </ul>
//         </div>`);
// });

app.listen(Port, (req, res) => {
  console.log(`Server running at Port: ${Port}`);
});

module.exports = app;
