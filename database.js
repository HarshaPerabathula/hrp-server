const { Client } = require("pg");

const client = new Client({
  host: "localhost",
  user: "postgres",
  port: "5432",
  password: "123456",
  database: "fcuk_tenant563834",
});

client.connect();

client.query(`select * from public.user`, (err, res) => {
  if (!err) {
    console.log(res.rows);
  } else {
    console.log("Error : ", err.message);
  }
  client.end();
});
