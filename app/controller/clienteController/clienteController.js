const Cliente = require('../../models/Cliente');
const { Op, QueryTypes, sequelize } = require('sequelize');

module.exports = {
    async index(req, res){
        try {
            const cliente = await Cliente.findAll();
            return res.json(cliente); 
        } catch (error) {
            return res.status(404).json({
                code: 404,
                error: "Cliente não localizados",
                message: e.message,
            }); 
        }
    },
    async store(req, res){
        try {
            
        } catch (e) {
            return res.status(404).json({
                code: 404,
                error: "Erro ao cadastrar o cliente.",
                message: e.message,
            });
        }
    }
}
