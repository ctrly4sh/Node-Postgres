const express = require("express");
require("dotenv").config();
const { Pool } = require("pg");

const app = express();

const pool = new Pool({
  connectionString: process.env.POSTGRES_CONNECTION_STRING,
  ssl: {
    rejectUnauthorized: false,
  },
});

app.get("/users", async (req, res) => {
  // res.send("Api started")
  try {
    const selectedUsers = await pool.query("SELECT * from users");
    res.json(selectedUsers.rows);
  } catch (exe) {
    console.log(`Error occurred ${exe}`);
    res.status(500).json({
      error: "Internal Server error",
    });
  }
});

const PORT = process.env.SERVER_PORT;

app.listen(PORT, () => {
  console.log(`Server started at localhost://${PORT}`);
});
