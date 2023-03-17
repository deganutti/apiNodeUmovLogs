const http = require("https");
const convert = require("xml-js");
const iconvlite = require("iconv-lite");
const axios = require("axios").default;


async function callApiTeste(req,res) {
    

    async function callApi(url, apikey, func) {
        if (!func) {
            /**
             * 
             * /usuarios/:apikey/
             * 
             */

            var options = {
                method: 'GET',
                url: `http://localhost:88/${url}/${apikey}`
            };

            await axios.request(options).then(function (response) {
                let attributos = response.data.result.entries.entry;
                let idAgente = attributos[0]._attributes.id;
                let linkAgente = attributos[0]._attributes.link;

                console.log(idAgente);
                console.log(linkAgente);
                
            }).catch(function (error) {
                console.error(error);
            });


 
        } else {
            let response = await axios({ url: `http://localhost:88/${url}/${apikey}/${func}` });
            // let response = await axios({ url: `http://localhost:88/` });
            console.log("Response:", response.data);
        }
    }




     callApi('usuarios', '36376e975e5cf31d52f1590e9600ffeb5dfa1f');
   

}
function callApiUsuarios(n) {
    setInterval(callApiTeste, n * 1000);
}

callApiUsuarios(3000);