const convert = require("xml-js");
const iconvlite = require("iconv-lite");
const axios = require("axios").default;
const { Op, QueryTypes, sequelize } = require("sequelize");

module.exports = {
  async getAgentXml(req, res) {
    var pages = 10;

    const { apikey } = req.params;

    var options = {
      method: "GET",
      url: `https://api.umov.me/CenterWeb/api/${apikey}/agent.xml?active=true`,
    };

    var ambienteOptions = {
      method: "GET",
      url: `http://localhost:88/ambienteApiKey/${apikey}`,
    };



    await axios
      .request(options)
      .then(function (response) {
        let attributos = convert.xml2js(response.data, {
          compact: false,
          spaces: 4,
        });
        var id = attributos.elements[0].elements[2].elements[1].attributes.id;
        var link =
          attributos.elements[0].elements[2].elements[1].attributes.link;

        var registros = attributos.elements[0].elements[2].elements.length;

        console.log("Total de registros: ", registros);
        console.log("reg", attributos.elements[0].elements[2].elements.length);

        for (i = 0; i < registros; i++) {
          const id = attributos.elements[0].elements[2].elements[i].attributes.id;
          const link =
            attributos.elements[0].elements[2].elements[i].attributes.link;

   //       console.log("id", id);
    //      console.log("link", link);


          axios.request(ambienteOptions).then((resAmbiente) => {
            const id_ambiente = resAmbiente.data.id;
            console.log("ID Ambiente:", id_ambiente,"\n","ID: ",id,"\n","Link: ", link);
            /**
             * Retorna na variavel, id_ambiente
             *  SELECT `id`, `descricao`, `apikey`, `createdAt`, `updatedAt` FROM `Ambiente` AS `Ambiente` WHERE `Ambiente`.`apikey` = '36376e975e5cf31d52f1590e9600ffeb5dfa1f' LIMIT 1
             */
      
            /**
             * /ambienteApiKey/:apikey
             */
            
            var agentBDOptions = {
                method: "POST",
                url: `http://localhost:88/agent/${id_ambiente}/${id}/"${link}"`,
            };
            console.log("ID Ambiente : ",id_ambiente);
            console.log("ID Agent : ",id);
            console.log("Link : ",link);
            axios.request(agentBDOptions).then((resAgentBd) => {
                console.log(resAgentBd.data);
            }).catch((e)=>{
               
                console.error(e);
            });

          });

          return res.json({
            "status": 200,
            "Message": "OK!"
          });


        }
      })
      .catch(function (error) {
        console.error(error);
      });
  },
};
