const express = require("express");
require("dotenv").config();
const bodyParser = require("body-parser");
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

app.get("/users", async (req, res) => {
  // res.send("Api started")
  try {
    const selectedUsers = await pool.query("SELECT * from users");
    res.json(selectedUsers.rows);
  } catch (exe) {
    console.log(exe);
    res.status(500).json({
      error: "Internal Server error",
    });
  }
});
const PORT = process.env.SERVER_PORT;

app.listen(PORT, () => {
  console.log(`Server started at localhost:a${PORT}`);
});
