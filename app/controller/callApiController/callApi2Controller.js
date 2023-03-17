const axios = require("axios");


module.exports = {

    async callApi2(req, res) {
        /**
        const [alternativeIdentifier, setalternativeIdentifier] = useState({ alternativeIdentifier: '' });
        const [campos, setCampos] = useState({
            alternativeIdentifier: '',
        });
    */
        const { url, apikey, func } = req.params;
        let response = await axios({ url: `http://localhost:88/usuarios/36376e975e5cf31d52f1590e9600ffeb5dfa1f` });
        console.log("Response:", response.data);
        req.json(response.data);
        // res.json(apikey);
        if (!func) {
            /**
             * /usuarios/:apikey/
             */
            //   let response = await axios({ url: `http://localhost:88/${url}/${apikey}` });
            let response = await axios({ url: `http://localhost:88/usuarios/36376e975e5cf31d52f1590e9600ffeb5dfa1f` });
            console.log("Response:", response.data);

        } else {

            let response = await axios({ url: `http://localhost:88/${url}/${apikey}/${func}` });
            // let response = await axios({ url: `http://localhost:88/` });
            console.log("Response:", response.data);
        }
    }
}