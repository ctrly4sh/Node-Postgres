const {Pool} = require("pg");
require("dotenv").config();

const pool = new Pool({
    connectionString:process.env.POSTGRES_CONNECTION_STRING,
    ssl:{
        rejectUnauthorized : false,
    },
});

const getUsers = (req,res) =>{
    pool.query("SELECT * FROM users" , (error,result)=>{
        if(error){
            throw error;
        }
        response.status(200).json(result.rows);
    });
};

const getUserById = (req,res) => {
    const id = req.query.id;
    pool.query("SELECT * FROM ")
}  