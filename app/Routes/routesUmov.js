const express = require('express'); 

//controller call ambiente umov.me
const agentXmlController = require('../controller/callUrlUmovController/agentXmlController');
const umovAgentController = require('../controller/umovAgentController/umovAgentController');
const umovAgentDetailController = require('../controller/umovAgentDetailController/umovAgentDetailController');




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
  


routesUmov.get("/agent",umovAgentController.index);

routesUmov.post("/agent/:id_ambiente/:id_agente/:link_agente",umovAgentController.store);

// routesUmov.get("/agentdetail/",umovAgentDetailController.index);
//routesUmov.post("/agentdetail/:id_ambiente/:id_agente",umovAgentDetailController.store);
routesUmov.post("/agentdetail",umovAgentDetailController.store);

routesUmov.get("/agentUmov",umovAgentDetailController.getAgentDetail);

routesUmov.get("/newAgentDetail/:apiKey/:agent",umovAgentDetailController.getAgentDetail); 


routesUmov.post("/newAgentDetail",umovAgentDetailController.store);

routesUmov.post("/newAgentDetail2",umovAgentDetailController.store);



module.exports = routesUmov;