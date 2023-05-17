const express = require('express');

/**
 * Pessoas
 */
const ambienteController = require('../controller/clienteController/clienteController');
const clienteController = require('../controller/clienteController/clienteController');


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

routes.get("/pessoas", clienteController.index);
routes.post("/pessoas/add", clienteController.index);

module.exports = routes;