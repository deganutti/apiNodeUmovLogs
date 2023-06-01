const DadosEmpresa = require('../../models/DadosEmpresa');
const { Op, QueryTypes, sequelize } = require("sequelize");

module.exports = {
    /**
     * Lista dados de empresa conectada.
     */
    async index(req,res,next) {
        try {
            const empresas = await DadosEmpresa.findAll();
            return res.json(empresas);
        } catch (e) {
            return res.status(404).json({
                code: 404,
                error: "Dados de empresa não localizados",
                message: e.message,
            });
        }
    },
    async store(req,res,next) {
        try {
            const {razao, fantasia, cnpj,endereco, numero, complemento, bairro, cidade, estado } = req.body
            const empresas = await DadosEmpresa.findAll({
                where: {
                    cnpj:cnpj
                }
            });
            if(!empresas){
                const novaEmpresa = await DadosEmpresa.create({
                    razao, 
                    fantasia, 
                    cnpj,
                    endereco, 
                    numero, 
                    complemento, 
                    bairro, 
                    cidade, 
                    estado
                });
                return res.json(novaEmpresa);
            } else {
                const atualizaEmpresa = await DadosEmpresa.update({
                    razao, 
                    fantasia, 
                    cnpj,
                    endereco, 
                    numero, 
                    complemento, 
                    bairro, 
                    cidade, 
                    estado
                },{
                    where: {
                        cnpj:cnpj
                    }
                });
                return res.json(atualizaEmpresa);
             }


        } catch (e) {
            return res.status(404).json({
                code: 404,
                error: "Dados de empresa não localizados",
                message: e.message,
            });
        }
    }
}