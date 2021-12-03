const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors');

//setting port
 app.set('port',process.env.PORT | 8021);
 //middleware
 app.use(express.json());
 //ESTO SE DEBE DEFINIR SIEMPRE ANTES DE LAS RUTAS!!!
 app.use(express.urlencoded({ extended:false }));

 //
 app.use(cors({
    origin: '*',// el origen puede ser cualquiera, una o varias peticiones así: ['','','','']
    methods: ['GET', 'POST', 'DELETE', 'UPDATE', 'PUT'],
    optionsSuccessStatus: 200
}));

 app.use(require('./routes/productos'));
 app.set('view engine','ejs');
 app.set('views',path.join(__dirname,'views'));

 app.listen(app.get('port'),function(){
     console.log(`server satarted on port ${app.get('port')}`);
 });