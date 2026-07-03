import mysql from 'mysql2/promise';
import env from 'dotenv';

env.config();


const pool = mysql.createPool({
    host: process.env.PD_HOST,
    user:  process.env.PD_USER,
    password: process.env.PD_PASSWORD,
    database: process.env.PD_DATABASE
})

export default pool



