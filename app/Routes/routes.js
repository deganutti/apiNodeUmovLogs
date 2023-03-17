const express = require('express');

/**
 * Ambientes
 */
const umovAmbienteController = require('../../app/controller/umovAmbienteController/umovAmbienteController');


const routes = express.Router();

routes.get("/", (req, res) => {
    return res.json({
        Autor: "Luiz Gabriel Deganutti",
        Versão: "1.0.0",
        Aplicação: "JSON XMl umov",
        Contato: {
            "E-Mail": "deganutti@outlook.com",
        },
    });
});

routes.get("/ambiente/", umovAmbienteController.index);
routes.get("/ambiente2/", umovAmbienteController.index2);
routes.get("/ambiente/:id", umovAmbienteController.indexOne);
routes.post("/ambiente/", umovAmbienteController.store);
routes.put("/ambiente/:id", umovAmbienteController.put);

module.exports = routes;