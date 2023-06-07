const { getJoyas, joyasHATEOAS, getJoyasByFilter, reportMiddleware } = require('./consultas');
const express = require('express');
const app = express();

const PORT = 3000;

app.listen(PORT, console.log(`Servidor encendido y operando en el puerto ${PORT}`));

app.use(express.json());

app.get('/joyas', reportMiddleware,  async (req, res) => {
    try {
        const queryString = req.query;
        const joyas = await getJoyas(queryString);
        const HATEOAS = await joyasHATEOAS(joyas)
        res.json(HATEOAS);
    }
    catch (error) {
        res.status(500).json(error.message);
    }
})

app.get('/joyas/filtros', async (req, res) => {
    try {
        const queryString = req.query;
        const joyas = await getJoyasByFilter(queryString);
        res.json(joyas);
    }
    catch (error) {
        res.status(500).json(error.message);
    }
})