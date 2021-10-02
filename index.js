const express = require('express');
const app = express();
const cors = require("cors");
const pool = require("./db");

//middleware
app.use(cors());
app.use(express.json());

//getAll
app.get("/fel/persona", async(req, res) =>{
    try{
        const allTable = await pool.query("SELECT * FROM CXC_PERSONA");
        res.json(allTable);

    }catch (err) {
        console.error(err.message);
    }
})

//getAll
app.get("/", async(req, res) =>{
    try{
        console.log(("Conexion"));

    }catch (err) {
        console.error(err.message);
    }
})

app.listen(5000, () => {
    console.log(("Servidor iniciado en puerto 5000"));
})