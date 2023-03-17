module.exports = {
    dialect: 'mysql',
    host: '127.0.0.1',
    username: 'root',
    password: '161851',
    database: 'athena',
    define: {
        timestamps: true,
        freezeTableName: true,
    },
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    },
}