const { raw } = require('mysql');
const LicencaEmpresa = require('../../models/LicencaEmpresa');
const DadosEmpresa = require('../../models/DadosEmpresa');
const { Op, QueryTypes, sequelize, Sequelize } = require("sequelize");

module.exports = {
    async index(req, res, next) {
        const licencas = await LicencaEmpresa.findAll(
            {
                include: [
                    {
                        attributes: [
                            'id_empresa',
                            [Sequelize.fn('sum', Sequelize.col('quantidade')), "Licenças Totais"],

                        ],
                        model: DadosEmpresa,
                        as: "DadosEmpresa",
                        required: true,
                        attributes: ['id', 'razao', 'fantasia'],
                        group: ["id_empresa"],
                        // raw:true,
                    }
                ]
            }
        );
        return res.json(licencas);

    },
    async novasQuantidades(req, res, next) {
        const { id_empresa, data_movimento, quantidade } = req.body;
        const licencas = await LicencaEmpresa.create(
            {
                id_empresa, data_movimento, quantidade
            }
        );
        return res.json(licencas);

    }
}