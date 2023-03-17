const openConnection = require('../../database');


module.exports = {

    getAllUsers : async function getAllUsers(callback){
        openConnection.connect();
        const query = 'shoe tables;' ;
        this.runQuery(query, callback.bind(this));
        console.log(this);
        openConnection.end();
    },
    setUser : async function setUser(model, callback){
        openConnection.connect();
        const query = '' ;
        this.runQuery(query, callback.bind(this));
        openConnection.end();
    },
    updateUser : async function updateUser(model,callback){
        openConnection.connect();
        const query = '' ;
        this.runQuery(query, callback.bind(this));
        openConnection.end();
    }
}




