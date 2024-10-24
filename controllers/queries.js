const {Pool} = require("pg");
require("dotenv").config();

const pool = new Pool({
    connectionString:process.env.POSTGRES_CONNECTION_STRING,
    ssl:{
        rejectUnauthorized : false,
    },
});

const getUsers = (request,response) =>{
    pool.query("SELECT * FROM users")
}