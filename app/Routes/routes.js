const express = require('express');

/**
 * Ambientes
 */
const ambienteController = require('../../app/controller/ambienteController/ambienteController');
const usuarioAmbienteController = require('../../app/controller/usuarioAmbienteController/usuarioAmbienteController');
const dadosEmpresaController = require('../controller/dadosEmpresa/dadosEmpresaController');
const LicencaEmpresaController = require('../controller/licencaEmpresaController/licencaEmpresaController');
const licencaEmpresaController = require('../controller/licencaEmpresaController/licencaEmpresaController');

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

/**
 * UsuarioAmbienteController
 */
routes.get("/usuario",usuarioAmbienteController.index);
routes.get("/usuarioAmbiente",usuarioAmbienteController.ambienteIndex);
routes.put("/novo_usuario",usuarioAmbienteController.store);

/**
 * Dados empresa
 */

routes.get("/empresa",dadosEmpresaController.index);
routes.put("/nova_empresa",dadosEmpresaController.store);

/**
 * Licenças
 */
routes.get("/licenca",licencaEmpresaController.index);
routes.get("/licenca_total",licencaEmpresaController.empresaLicenca);
routes.put("/add_licenca",licencaEmpresaController.novasQuantidades);


routes.get("/ambiente/", ambienteController.index);
routes.get("/ambiente2/", ambienteController.indexTeste);
routes.get("/ambiente/:id", ambienteController.indexOne);
routes.get("/ambienteApiKey/:apikey", ambienteController.indexApiKey);
routes.post("/ambiente/", ambienteController.store);
routes.put("/ambiente/:id", ambienteController.put);

module.exports = routes;