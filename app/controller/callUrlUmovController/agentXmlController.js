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
            url:`https://api.umov.me/CenterWeb/api/${apikey}/agent.xml?active=true`,
        }

        await axios.request(options).then(function (response) {
            let attributos = convert.xml2js( response.data,{compact:false,spaces:4}); 
            var id = attributos.elements[0].elements[2].elements[0].attributes.id;
            var link = attributos.elements[0].elements[2].elements[0].attributes.link;
            var cadastros = 20;            

            for(i=0;i < attributos.elements.length; i++){

                   
                    const {apikey} = req.params;
                    console.log(h);
                    var options = {
                        method: 'GET',
                        url:`https://api.umov.me/CenterWeb/api/${apikey}/agent.xml?paging.page=${i}`,
                        
                    }
                  
                    await axios.request(options).then( (resp) => {
                        // console.log(resp.data);
                        // console.log(h);
                        
                        var att = convert.xml2js(resp.data,{compact:false,spaces:4});

                        var id = att.elements[0].elements[2].elements[i].attributes.id;
                        var link = att.elements[0].elements[2].elements[i].attributes.link;
                        
                        console.log(id);
                      //  console.log(link);

                     //    return res.json(resp.data);
        
                    })

                   // return res.json(attributos.elements[0].elements[2]);
                 //   return res.json(attributos);
               

            }
            return res.json(attributos);




/*
            var r0 = attributos;
            var r1 = attributos.elements[0].elements[0];
            var r2 = attributos.elements[0].elements[2].elements[0].attributes;
  
            var r3 = attributos.elements[0].elements[2].elements[0].attributes.id;
            var r4 = attributos.elements[0].elements[2].elements[0].attributes.link;
 */


        }).catch(function (error) {
            console.error(error);
        });

    }
}