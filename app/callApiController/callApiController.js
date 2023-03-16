const axios = require("axios");
const fetch = require('node-fetch');

async function callApiTeste() {

    async function getApi() {
        let url = 'http://127.0.0.1:88/usuarios/36376e975e5cf31d52f1590e9600ffeb5dfa1f';

        let options = { method: 'GET' };

        fetch(url, options)
            .then(res => res.json())
            .then(json => console.log(json))
            .catch(err => console.error('error:' + err));
    }


    async function callApi(url, apikey, func) {
        if (!func) {
            /**
             * 
             * /usuarios/:apikey/
             * 
             */

            var options = {
                method: 'GET',
                url: 'http://127.0.0.1:88/usuarios/36376e975e5cf31d52f1590e9600ffeb5dfa1f'
            };

            await axios.request(options).then(function (response) {
                console.log(response.data);
            }).catch(function (error) {
                console.error(error);
            });




            //let response = await axios({ url: `http://localhost:88/${url}/${apikey}` });
            //   let response = await axios({ url: `http://localhost:88/${url}/${apikey}` });
            //console.log("Response:", response.data);
        } else {
            let response = await axios({ url: `http://localhost:88/${url}/${apikey}/${func}` });
            // let response = await axios({ url: `http://localhost:88/` });
            console.log("Response:", response.data);
        }
    }




    // callApi('usuarios', '36376e975e5cf31d52f1590e9600ffeb5dfa1f');
    getApi();

}
function callApiUsuarios(n) {
    setInterval(callApiTeste, n * 1000);
    // setInterval(getApi, n * 1000);
}

callApiUsuarios(3);