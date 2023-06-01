const UsuarioAmbiente = require('../../models/UsuarioAmbiente');
const { Op, QueryTypes, sequelize } = require("sequelize");

module.exports = {
    /**
     * Lista todos os cadastros de usuario independencete do ambiguous
     */
    async index(req, res, next) {
        try {
            const usuarios = await UsuarioAmbiente.findAll({
                inclide: [
                    {
                        model: Ambiente,
                        as: "ambiente",
                        attributes: ["id", "descricao"],
                        required: true,
                    },
                    {
                        model: AgentXml,
                        as: "angentxml",
                        attributes: ["id_agente"],
                        required: true,
                    },
                ]
            });
            return res.json(usuarios);
        } catch (e) {
            return res.status(404).json({
                code: 404,
                error: "Usuários não localizados",
                message: e.message,
            });
        }
    },
    async ambienteIndex(req, res, next) {
        try {
            const { id_ambiente } = req.body;
            const usuarios = await UsuarioAmbiente.findAll({
                where: {
                    id_agente: id_ambiente
                },
                inclide: [
                    {
                        model: Ambiente,
                        as: "ambiente",
                        attributes: ["id", "descricao"],
                        required: true,
                    },
                    {
                        model: AgentXml,
                        as: "angentxml",
                        attributes: ["id_agente"],
                        required: true,
                    },
                ]
            });
            return res.json(usuarios);
        } catch (e) {
            return res.status(404).json({
                code: 404,
                error: "Usuários não localizados",
                message: e.message,
            });
        }
    },
    async store(req, res) {
        try {
            const { id_ambiente, id_agente, nome_agente, login_agente, situacao_agente } = req.body;


            const usuarios = await UsuarioAmbiente.findAll({
                where: {
                    id_ambiente, id_agente
                }
            });


            if (!usuarios) {
                const novoUsuario = await UsuarioAmbiente.create({
                    id_ambiente,
                    id_agente,
                    nome_agente,
                    login_agente,
                    situacao_agente
                });

                return res.json(novoUsuario);
            } else {
                const atualizaUsuario = await UsuarioAmbiente.update({
                    id_ambiente,
                    id_agente,
                    nome_agente,
                    login_agente,
                    situacao_agente
                }, {
                    where: {
                        id_ambiente, id_agente
                    }
                });

                return res.json(atualizaUsuario);
            }

        } catch (e) {
            console.error(e);
            return res.status(404).json({
                code: 404,
                error: "Erro ao cadastrar o usuário.",
                message: e.message,
            });
        }
    },
}