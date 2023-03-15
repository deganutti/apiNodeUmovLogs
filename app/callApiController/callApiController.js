const axios = require("axios");


async function callApiTeste() {

    async function callApi(url, apikey, func) {
        if (!func) {
            /**
             * 
             * /usuarios/:apikey/
             * 
             */


            //   let response = await axios({ url: `http://localhost:88/${url}/${apikey}` });
            let response = await axios({ url: `http://localhost:88/${url}/${apikey}` });
            console.log("Response:", response.data);
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

//callApiUsuarios(3);


