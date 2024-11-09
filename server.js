const express = require("express");
require("dotenv").config();
const bodyParser = require("body-parser");
const Pool = require("pg").Pool;

const app = express();

const CONNECTIONSTRING = process.env.POSTGRES_CONNECTION_STRING;
const PORT = process.env.SERVER_PORT || 8007;

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

const pool = new Pool({
  connectionString: CONNECTIONSTRING,
  ssl: {
    rejectUnauthorized: false,
  },
});

app.get("/" , (req,res)=>{
  res.json({
    message : "Node + Neon"
  })
});

app.listen(PORT , ()=>{
  console.log(`Server started at localhost:${PORT}`);
})
