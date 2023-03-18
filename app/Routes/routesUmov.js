const express = require('express'); 
const callApi = require('../controller/callApiController/callApiController'); 
const umovAgentController = require('../controller/umovAgentController/umovAgentController');

const routesUmov = express.Router();

routesUmov.get("/1", (req, res) => {
    return res.json({
        Autor: "Luiz Gabriel Deganutti",
        Versão: "1.0.0",
        Aplicação: "JSON XMl umov",
        Contato: {
            "E-Mail": "deganutti@outlook.com",
        },
    });
});
 
routesUmov.post("/agent/:id_ambiente/:apikey");

module.exports = routesUmov;