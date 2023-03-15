const db = require('../database/database');

class ClienteUmov {

    async getAllUsuarios() {

        const conn = await connect();

        const [rows] = await conn.query('show tables;');
        return rows;

    }



}
module.exports = ClienteUmov;




