const express = require('express');
const {connect} = require('./Routes/routes');
const routes = require('./Routes/routes');
const routesUmov = require('./Routes/routesUmov');
const routesPessoas = require('./Routes/routesPessoas');
const url = require('url');
require('./database');

//require('./callApiController/callApiController');



const app = express();
app.use(express.json());
app.use(routes);
app.use(routesUmov);
app.use(routesPessoas);


app.listen(88, function () {
        console.log('Aplicativo online');
    })