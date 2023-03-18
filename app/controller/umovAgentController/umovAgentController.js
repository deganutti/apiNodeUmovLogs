const http = require("https");
const convert = require("xml-js");
const iconvlite = require("iconv-lite");
const axios = require("axios").default;

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
    
      const { id_ambiente, agent, url } = req.params;
      const Agente = await Agente.create({
        id_ambietne,
        agent,
        url,
      });
      return res.json(Agente);
    } catch (e) {
      return res.status(404).json({
        code: 404,
        error: "Erro ao cadastrar o ambiente.",
        message: e.message,
      });
    }
  },
};
