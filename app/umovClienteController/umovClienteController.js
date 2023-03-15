const http = require("https");
const convert = require("xml-js");
const iconvlite = require("iconv-lite");
const axios = require("axios").default;


const UsuariosUmov = require("../umovClienteModel/umovClienteModel");


module.exports = {

    async getAgent(req, res) {

        const { apikey } = req.params;


        const options = {
            method: "GET",
            url: `https://api.umov.me/CenterWeb/api/${apikey}/agent.xml`,
            params: { active: true },
        };

        const xml = axios.request(options).then(function (response) {
            return res.json(convert.xml2js(response.data, {
                compact: true,
                //  ignoreDoctype: false,
                spaces: 46
            }));

        }).catch(function (error) {
            console.error(error);
        });

    },

    async getAgentId(req, res) {

        const { apikey, agentId } = req.params;
        //const { apikey } = req.params;
        //const { agentId } = req.body;


        const options = {
            method: "GET",
            url: `https://api.umov.me/CenterWeb/api/${apikey}/agent/${agentId}.xml`,
            params: { active: true },
        };

        const xml = axios.request(options).then(function (response) {
            return res.json(convert.xml2js(response.data, {
                compact: true,
                ignoreDoctype: false,
                spaces: 46
            }));

        }).catch(function (error) {
            console.error(error);
        });

    },
    /*
        async getTeste(req, res) {
            try {
                const teste = await UsuariosUmov();
            } catch (e) {
                return res.status(500).json({
                    code: 500,
                    error: "Erro ao executar ação!",
                    message: e.message,
                });
            }
        }
    */


}










