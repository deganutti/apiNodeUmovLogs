const http = require("https");
const convert = require("xml-js");
const iconvlite = require("iconv-lite");
const axios = require("axios").default;
const { Op } = require("sequelize");

const AgentXml = require("../../models/AgentXml");

module.exports = {
  async index(req, res) {
    try {
      const Agente = await AgentXml.findAll();
      return res.json(Agente);
    } catch (e) {
      return res.status(404).json({
        code: 404,
        error: "Agentes não localizados",
        message: e.message,
      });
    }
  },
  async store(req, res) {
    try {
      /**
       * captura os dados dos agentes do center, e insere no banco de dados.
       * id_ambiente identifica a chave estrangeira na tabela ambientes.
       * agent e o código do agente.
       * url e a url /agent/numeroagente.xml
       */
    
      const { id_ambiente, id_agente, link_agente } = req.params;
      try {
        /**
         * Valida se já existe o registro em tabela para que não tenha duplicidade nos campos.
         * Caso haja tal duplicitade,  a consulta ao detalhe do agente será mais lenta evitando que os dados sejam obtidos de maneira mais rápida.
         */
        const Agent = await AgentXml.findOne({
          where:{
            id_ambiente:id_ambiente,
            id_agente : id_agente
          }
        });
         
        if(!Agent){
          var AgenteXmlx = await AgentXml.create({
            id_ambiente,
            id_agente,
            link_agente,
          });
        }
        //return res.json(Agent);
      } catch(e) {
        return res.status(404).json({
          code: 404,
          error: "Agentes não localizados",
          message: e.message,
        });
      }
     
      return res.json(AgenteXmlx);
    } catch (e) {
      return res.status(404).json({
        code: 404,
        error: "Erro ao cadastrar o Agente.",
        message: e.message,
      });
    }
  },
};
