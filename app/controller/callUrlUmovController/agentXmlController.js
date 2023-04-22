const convert = require("xml-js");
const iconvlite = require("iconv-lite");
const axios = require("axios").default;
const { Op, QueryTypes, sequelize } = require("sequelize");

module.exports = {
  async getAgentXml(req, res) {
    const pages = 999999999999999999999999;

    const { apikey } = req.params;
 
    for (page = 0; page < pages; page++) {
      var options = {
        method: "GET",
        url: `https://api.umov.me/CenterWeb/api/${apikey}/agent.xml?paging.page=${page}`,
      };

      console.log("Pagina:", page);

      var ambienteOptions = {
        method: "GET",
        url: `http://localhost:88/ambienteApiKey/${apikey}`,
      };

      await axios.request(options).then(function (response) {
        let attributos = convert.xml2js(response.data, {
          compact: true,
          spaces: 4,
        });
        let totalPorPagina = attributos["result"]["size"]._text;
        let detalhes = attributos["result"]["entries"]["entry"];

        if (detalhes) {
          let agent = detalhes[0]["_attributes"];

          console.log(`Quantidade página: ${totalPorPagina}`);
          console.log(`Detalhes: ${detalhes}`);
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
                if (totalPorPagina !== "0") {
                  var agentBDOptions = {
                    method: "POST",
                    url: `http://localhost:88/agent/${id_ambiente}/${id}/${link}`,
                  };
                  //   console.log("ID Ambiente : ", id_ambiente);
                  //   console.log("ID Agent : ", id);
                  //   console.log("Link : ", link2);
                  axios
                    .request(agentBDOptions)
                    .then((resAgentBd) => {
                      console.log(resAgentBd.data);
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
              })
              .catch(function (error) {
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
