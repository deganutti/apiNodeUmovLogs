const express = require('express');
const umovClienteController = require('../controller/umovClienteController/umovClienteController');
const callApi = require('../controller/callApiController/callApiController');
const callApi2 = require('../controller/callApiController/callApi2Controller');


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

routesUmov.get("/t", callApi2.callApi2);



// routesUmov.get("/call", callApi.callApi);


module.exports = routesUmov;