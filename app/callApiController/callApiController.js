const axios = require("axios");

async function callApiTeste(req, res) {



    async function callApiUsuarios() {

        var options = {
            method: 'POST',
            url: 'http://127.0.0.1:88/agentUmov/36376e975e5cf31d52f1590e9600ffeb5dfa1f/1121033',
            headers: {'Content-Type': 'application/json'}
          };
          
          axios.request(options).then(function (response) {
            console.log(response.data);
          }).catch(function (error) {
            console.error(error);
          });




          var options2 = {
            method: 'POST',
            url: 'http://127.0.0.1:88/agentUmov/36376e975e5cf31d52f1590e9600ffeb5dfa1f/1062099',
            headers: {'Content-Type': 'application/json'}
          };
          
          axios.request(options2).then(function (response) {
            console.log(response.data);
          }).catch(function (error) {
            console.error(error);
          });
    }




    callApiUsuarios();
    //getApi();

}
function CallApi(n) {
    setInterval(callApiTeste, n * 1000);
    // setInterval(getApi, n * 1000);
}

//CallApi(5);