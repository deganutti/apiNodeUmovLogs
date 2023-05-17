const convert = require("xml-js");
const iconvlite = require("iconv-lite");
const axios = require("axios").default;
const { Op, QueryTypes, sequelize } = require("sequelize");

module.exports = {
  async getAgentXml(req, res) {
    const pages = 999999999999999999999999;

    const { apikey } = req.params;
    var totalPorPagina=25;
    for (page = 0; page < pages; page++) {
      var options = {
        method: "GET",
        url: `https://api.umov.me/CenterWeb/api/${apikey}/agent.xml?paging.page=${page}`,
      };

      console.log("Pagina:", page);
      console.log(`Total por Página: ${totalPorPagina}`);

      var ambienteOptions = {
        method: "GET",
        url: `http://localhost:88/ambienteApiKey/${apikey}`,
      };

      //console.log("Passei por aqui - 0");
      await axios.request(options).then(function (response) {
        let attributos = convert.xml2js(response.data, {
          compact: true,
          spaces: 4,
        });
 
        totalPorPagina=attributos["result"]["size"]._text;
        if (totalPorPagina == 0) {
          /**
           * Valida se a quantidade de registro por pagina e superior a zero
           */
          page = pages;
          return res.json({
            status: 200,
            Message: "Consulta finalizada",
          });
        }

        let detalhes = attributos["result"]["entries"]["entry"];

        if (detalhes) {
          let agent = detalhes[0]["_attributes"];

          for (let i = 0; i < totalPorPagina; i++) {

            let id = detalhes[i]["_attributes"].id;
            let link = detalhes[i]["_attributes"].link;
            link = link.replace("/agent/", "");
            console.log(`id: ${id}`);
            console.log(`link: ${link}`);
            console.log(`Total -> ${i}`);

            axios
              .request(ambienteOptions)
              .then((resAmbiente) => {
                const id_ambiente = resAmbiente.data.id;
                //       console.log( "ID Ambiente:",id_ambiente,"\n","ID: ",id,"\n","Link: ",link);
                /**
                 * Retorna na variavel, id_ambiente
                 *  SELECT `id`, `descricao`, `apikey`, `createdAt`, `updatedAt` FROM `Ambiente` AS `Ambiente` WHERE `Ambiente`.`apikey` = '36376e975e5cf31d52f1590e9600ffeb5dfa1f' LIMIT 1
                 */

                /**
                 * /ambienteApiKey/:apikey
                 */
                if (totalPorPagina!==0) {
                  console.log("Passei por aqui");
                  var agentBDOptions = {
                    method: "POST",
                    url: `http://localhost:88/agent/${id_ambiente}/${id}/${link}`,
                  };

                  axios
                    .request(agentBDOptions)
                    .then((resAgentBd) => {
                      console.log(resAgentBd.data);

                      console.log(`Total por pagina: ${totalPorPagina}`);
                    })
                    .catch((e) => {
                      console.error(e);
                    });
                } else {
                  page = pages;
                  return res.json({
                    status: 200,
                    Message: "Consulta finalizada",
                  });
                }
                //    return res.json(detalhes);
              }).catch(function (error) {
                console.log(`Estou entrando em um erro \n ${error}`);
                console.error(error);
              });
          }
        } else {
          return res.json({
            status: 200,
            Message: "Consulta finalizada",
          });
        }
      });
    }
  },
};
