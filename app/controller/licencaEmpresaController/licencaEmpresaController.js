

const { raw } = require('mysql');
const LicencaEmpresa = require('../../models/LicencaEmpresa');
const DadosEmpresa = require('../../models/DadosEmpresa');
const { Op, QueryTypes, sequelize, Sequelize } = require("sequelize");

const connection  = require('../../database/index');//para usar a query

module.exports = {
    async index(req, res, next) {
        const licencas = await LicencaEmpresa.findAll(
            {
                include: [
                    {
                        
                        model: DadosEmpresa,
                        as: "DadosEmpresa",
                        required: true,
                        attributes: ['id', 'razao', 'fantasia'],
                        group: ["id_empresa"],
                        raw:true,
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

    },
    async empresaLicenca(req,res,next){
        query = `
        select de.id as id_empresa
     , de.razao 
     , de.fantasia 
     , de.cnpj 
     , de.endereco 
     , de.numero 
     , de.complemento 
     , de.bairro 
     , de.cidade 
     , de.cidade 
     , de.estado 
     , coalesce((select sum(quantidade) from LicencaEmpresa le where le.id_empresa = de.id),0) as total_licencas
from DadosEmpresa de 
        `;
        const totalLicencas = await connection.query(query, { Mdoel:LicencaEmpresa, type: QueryTypes.SELECT });
        return res.json(totalLicencas);
    },
}