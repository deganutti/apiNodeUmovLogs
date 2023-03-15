const express = require('express');
const umovClienteController = require('../umovClienteController/umovClienteController');
const callApi = require('../callApiController/callApiController');


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

routesUmov.get("/usuarios/:apikey/", umovClienteController.getAgent);
routesUmov.get("/usuarios/:apikey/:agentId", umovClienteController.getAgentId);
//routesUmov.get("/teste", umovClienteController.getTeste);



// routesUmov.get("/call", callApi.callApi);


module.exports = routesUmov;