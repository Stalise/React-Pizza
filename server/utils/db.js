const Pool = require('pg').Pool;
require('dotenv').config();

// const pool = new Pool({
//    user: 'postgres',
//    password: '1234qwer',
//    host: 'localhost',
//    port: 5432,
//    database: 'social_network'
// })

const pool = new Pool({
   user: process.env.PG_USER,
   password: process.env.PG_PASSWORD,
   host: process.env.PG_HOST,
   port: process.env.PG_PORT,
   database: process.env.PG_DATABASE,
   ssl: {
      rejectUnauthorized: false,
   }
})

module.exports = pool