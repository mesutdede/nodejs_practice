const {Pool,Client} = require('pg')

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'parps',
    password: 'X135790x',
    port: 5432
})

pool.query('SELECT NOW()', (err, res)=>{
    console.log(err,res)
    pool.end()
})

const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'parps',
    password: 'X135790x',
    port: 5432,
  })
  client.connect()
  client.query('SELECT NOW()', (err, res) => {
    console.log(err, res)
    client.end()
  })