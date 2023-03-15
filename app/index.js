const express = require('express');
const routes = require('./Routes/routes');
const routesUmov = require('./Routes/routesUmov');

require('./database/database');

require('./callApiController/callApiController');



const app = express();
app.use(express.json());
app.use(routes);
app.use(routesUmov);



app.listen(88, () => {
    console.log('Aplicativo online');
})