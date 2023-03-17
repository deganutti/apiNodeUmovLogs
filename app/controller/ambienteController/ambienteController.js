const {Op} = require('sequelize');
const Ambiente = require('../../models/Ambiente');

module.exports = {
    /**
     * 
     * @param {*} req 
     * @param {*} res 
     * @param {*} next 
     * @returns 
     * Retorna todos os cadastros de ambiente cadastrados
     */
    async index(req,res,next){
        try {
            const ambiente = await Ambiente.findAll();
            return res.json(ambiente);

        } catch (e) {
            return res.status(500).json({
                code: 404,
                error: "Erro ao listar o cadastro de ambiente!",
                'model':'Ambiete',
                'controller':'ambienteController',
                message: e.message
              });
        }
    },
    /**
     * Realiza novo cadastro
     */
    async store(req,res,next){
        try {
            const {descricao,apikey} = req.body;
        const ambiente = await Ambiente.create({descricao,apikey});
        return res.json(ambiente);

        } catch (e) {
            return res.status(500).json({
                code: 404,
                error: "Erro ao realizar o cadastro de ambiente!",
                'model':'Ambiete',
                'controller':'ambienteController',
                message: e.message
              });
        }
    }
}