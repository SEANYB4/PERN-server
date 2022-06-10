const Pool = require("pg").Pool;

const pool = new Pool({
    user: "sean",
    password: "atlas656",
    host: "localhost",
    port: 5432,
    database: "perntodo"
});


module.exports = pool;



