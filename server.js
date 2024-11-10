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
