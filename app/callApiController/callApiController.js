const axios = require("axios");

async function callApiTeste(req, res) {



    async function callApi(url, apikey, func) {
        if (!func) {
            /**
             * /usuarios/:apikey/
             */
            //let response = await axios({ url: `http://localhost:88/${url}/${apikey}` });
            await axios({ url: `http://localhost:88/${url}/${apikey}` }).then(function (response) {


                console.log("Resposta:", response.data);
                console.log("Resposta:", response.data.result.resourceName);
                console.log("Resposta:", response.data.result.entries);
                console.log("Resposta:", response.data.result.entries.entry);
                console.log("Resposta:", response.data.result.entries.entry['_attributes']);
                console.log("Resposta:", response.data.result.entries.entry.agent);
            });



            //console.log("Response:", response.data);





        } else {
            let response = await axios({ url: `http://localhost:88/${url}/${apikey}/${func}` });
            // let response = await axios({ url: `http://localhost:88/` });
            console.log("Response:", response.data);
        }
    }




    callApi('usuarios', '36376e975e5cf31d52f1590e9600ffeb5dfa1f');
    //getApi();

}
function callApiUsuarios(n) {
    setInterval(callApiTeste, n * 1000);
    // setInterval(getApi, n * 1000);
}

//callApiUsuarios(5);