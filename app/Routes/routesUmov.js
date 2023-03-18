const express = require('express'); 

//controller call ambiente umov.me
const agentXmlController = require('../controller/callUrlUmovController/agentXmlController');






const callApi = require('../controller/callApiController/callApiController');  

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

routesUmov.get("/agent/:apikey",agentXmlController.getAgentXml);
  

module.exports = routesUmov;