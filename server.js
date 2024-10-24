const express = require("express");
require("dotenv").config();
// const bodyParser = require("body-parser");
const Pool = require("pg").Pool;

const app = express();

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

const pool = new Pool({
  connectionString: process.env.POSTGRES_CONNECTION_STRING,
  ssl: {
    rejectUnauthorized: false,
  },
});

app.get("/", (req, res) => {
  res.json({
    info: "Node + postgres",
  });
});

app.get("/users", )

const PORT = process.env.SERVER_PORT;

app.listen(PORT, () => {
  console.log(`Server started at localhost:${PORT}`);
});
