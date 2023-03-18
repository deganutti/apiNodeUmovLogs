const convert = require("xml-js");
const iconvlite = require("iconv-lite");
const axios = require("axios").default; 
const { Op, QueryTypes, sequelize } = require('sequelize');
 

module.exports = {
    async getAgentXml(req, res){

        const {apikey} = req.params;

        console.log(apikey);

        var options = {
            method: 'GET',
            url:`https://api.umov.me/CenterWeb/api/${apikey}/agent.xml`,
        }

        await axios.request(options).then(function (response) {
            let attributos = convert.xml2js( response.data,{compact:false,spaces:4});
       //     let idAgente = attributos[0]._attributes.id;
       //     let linkAgente = attributos[0]._attributes.link;


            var r0 = attributos;
            var r1 = attributos.elements[0].elements[0];
            var r2 = attributos.elements[0].elements[2].elements[0].attributes;
            var r3 = attributos.elements[0].elements[2].elements[0].attributes.id;
            var r4 = attributos.elements[0].elements[2].elements[0].attributes.link;

            console.log(r0);
            console.log(r1);
            console.log(r2);
            console.log(r3);
            console.log(r4);

            return res.json(r0);

        //    console.log(idAgente);
        //    console.log(linkAgente);
/*
            console.log(response.data);
            console.log(response.data.result);
            console.log(response.data.result.entries.entry);
*/
        }).catch(function (error) {
            console.error(error);
        });

    }
}