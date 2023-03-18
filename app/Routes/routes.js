const express = require('express');

/**
 * Ambientes
 */
const ambienteController = require('../../app/controller/ambienteController/ambienteController');


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

routes.get("/ambiente/", ambienteController.index);
routes.get("/ambiente2/", ambienteController.indexTeste);
routes.get("/ambiente/:id", ambienteController.indexOne);
routes.get("/ambienteApiKey/:apikey", ambienteController.indexApiKey);
routes.post("/ambiente/", ambienteController.store);
routes.put("/ambiente/:id", ambienteController.put);

module.exports = routes;