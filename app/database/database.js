const mysql = require('mysql');

//definindo conexão com base de dados.

async function connect() {
    if (global.connection && global.connection.state !== 'disconnected')
        return global.connection;


    const con = mysql.createConnection({
        host: '127.0.0.1',
        user: 'root',
        password: '161851',
        database: 'umov_log_usuario_gruger',
        define: {
            timestamps: true,
            freezeTableName: true,
        }
    });

    con.connect((err) => {
        if (err) {
            console.log('Erro ao conectar a base de dados', err);
            return;
        }
        console.log('Database online');
    });

}








