const Ambiente = require('../../models/Ambiente');
const { Op, QueryTypes, sequelize } = require('sequelize');

module.exports = {
    /**
     * Lista todos os ambientes cadastrados
     */
    async index(req, res) {

        try {

            const ambiente = await Ambiente.findAll();
            return res.json(ambiente);
        } catch (e) {
            return res.status(404).json({
                code: 404,
                error: "Ambientes não localizados",
                message: e.message,
            });
        }
    },
    
    async indexTeste(req,res,next){
        try {
            const ambiente = await Ambiente.findAll();
            for (i = 0; i < ambiente.length; i++) {
                console.log("id: ",ambiente[i]['id'],"Apikey: ",ambiente[i]['apikey']);
                console.log(ambiente[i]['apikey']);
            }
            return res.json(ambiente);

        } catch (e) {
            return res.status(404).json({
                code: 404,
                error: "Erro ao listar o cadastro de ambiente!",
                'model':'Ambiete',
                'controller':'ambienteController',
                message: e.message
              });
        }
    },
    async indexOne(req, res) {

        try {
            const { id } = req.params;
            const ambiente = await Ambiente.findOne({
                where: { id }
            });
            return res.json(ambiente);
        } catch (e) {
            return res.status(404).json({
                code: 404,
                error: "Ambientes não localizados",
                message: e.message,
            });
        }
    },
    async store(req, res) {
        try {
            const { descricao, apikey } = req.body;

            const ambiente = await Ambiente.create({
                descricao,
                apikey
            });
            return res.json(ambiente);
        } catch (e) {
            return res.status(404).json({
                code: 404,
                error: "Erro ao cadastrar o ambiente.",
                message: e.message,
            });
        }
    },
    async put(req, res) {
        try {
            const { id } = req.params;
            const { descricao, apikey } = req.body;

            const ambiente = await Ambiente.findOne({
                where: { id }
            });
            if (!ambiente) {
                return res.status(404).json({
                    code: 404,
                    error: "Ambiente não localizado!",
                    message: e.message
                });
            } else {
                await ambiente.update({ descricao, apikey });
                await ambiente.save();
                return res.json(ambiente);
            }
        } catch (e) {
            return res.status(500).json({
                code: 404,
                error: "Ambiente não localizado!",
                message: e.message
            });
        }
    },
}