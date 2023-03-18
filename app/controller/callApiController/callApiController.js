const http = require("https");
const convert = require("xml-js");
const iconvlite = require("iconv-lite");
const axios = require("axios");
const Ambiente = require('../../models/Ambiente');
const { Op, QueryTypes, sequelize } = require('sequelize');

async function callApiTeste(req, res) {


    async function callApi(url, apikey, func) {
        if (!func) {
            /**
             * 
             * /usuarios/:apikey/
             * 
             */

            var options = {
                method: 'GET',
               // url: `http://localhost:88/${url}/${apikey}`
               // url: `http://localhost:88/ambiente2`
               url:`https://api.umov.me/CenterWeb/api/${apikey}/agent.xml`
            };

            await axios.request(options).then(function (response) {
              //  let attributos = response.data;
              var xmlAgent = convert.xml2json(response.data,{compact:true,spaces:4});
           //   console.log(xmlAgent);
              console.log(xmlAgent[0].result);
              /*
              var atrributos =   xmlAgent.result.entries.entry
                for(i = 0; i < attributos.length; i++) {
                    console.log(atrributos[i]._attributes.id);
                    console.log(atrributos[i]._attributes.link);
                }

                */
               // let attributos = response.data.result.entries.entry;
               // let idAgente = attributos[0]._attributes.id;
               // let linkAgente = attributos[0]._attributes.link;

               // console.log(idAgente);
               // console.log(linkAgente);

              // console.log(attributos);

            }).catch(function (error) {
                console.error(error);
            });



        } else {
            let response = await axios({ url: `http://localhost:88/${url}/${apikey}/${func}` });
            // let response = await axios({ url: `http://localhost:88/` });
            console.log("Response:", response.data);
        }
    }




  //  callApi('usuarios', '36376e975e5cf31d52f1590e9600ffeb5dfa1f');
    callApi('usuarios', '36376e975e5cf31d52f1590e9600ffeb5dfa1f');


}
function callApiUsuarios(n) {
    setInterval(callApiTeste, n * 1000);
}

//callApiUsuarios(5);