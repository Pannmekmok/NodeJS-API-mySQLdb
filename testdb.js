import mysql2 from 'mysql2'
import express from 'express'

const connection = mysql2.createConnection({
    host: "localhost",
    database: "test_db",
    user: "root",
    password: "password"
});

const app = express();
const PORT = 5000;

app.listen(PORT, ()=> {
    console.log(`Server is running on http://localhost:${PORT}`);
    connection.connect((err)=> {
        if (err) throw err;
        console.log("DATABASE CONNECTED");
    });
});

app.use("/all", (req, res)=> {
    const sql_query = 'select * from test_db.test'
    connection.query(sql_query, (err, result)=> {
        if (err) throw err;
        res.send(result)
    });
});
