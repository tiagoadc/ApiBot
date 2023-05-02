const {Pool} = require('pg')

const pool = new Pool({
    "user": "postgres",
    "password": "1234",
    "database": "postgres",
    "host": "localhost",
    "port": 5432
})

exports.pool = pool;