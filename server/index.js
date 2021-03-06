/**
 * Main application server config
 */

'use strict';

import fs from 'fs';
import path from 'path';  
import http from 'http';
import express from 'express';  
import favicon from 'serve-favicon';
import morgan from 'morgan';
import errorhandler from 'errorhandler';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import config from './config';
import routes from './routes';
import FileStreamRotator from 'file-stream-rotator';

// lets ensure NODE_ENV is set
var node_env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

if(node_env === 'development' || node_env === 'test') {
  require('babel-register');
}


let app = express();
const server = http.createServer(app);
const env = app.get('env');


// webpack dev config
if(env === 'development') {

    let webpack = require('webpack');
    const webpackConf = require('./../webpack/webpack.dev.js');
    const compiler = webpack(webpackConf);

    app.use(require('webpack-dev-middleware')(compiler, {  
        noInfo: false,
        stats: {
            colors: true,
            timings: true,
            chunks: false
        },
    }));

    app.use(require('webpack-hot-middleware')(compiler));  

    // use dev error handler
    app.use(errorhandler())

}


// env specific config
if(env === 'development' || env === 'test') {
    
    // dev logging to the console
    app.use(morgan('dev'));

    // index.html path
    app.use(express.static(path.join(config.root, '.tmp')));
}

if(env === 'production') {

    // production logging to the log files
    const logDir = config.logDir;
    fs.existsSync(logDir) || fs.mkdirSync(logDir);

    var accessLogStream = FileStreamRotator.getStream({
        date_format: 'YYYYMMDD',
        filename: path.join(logDir, 'access-%DATE%.log'),
        frequency: 'daily',
        verbose: false
    });

    app.use(morgan('combined', {
        stream: accessLogStream
    }));

    app.use(express.static(path.join(config.root, 'client')));
}

// favicon dest
app.use(favicon(path.join(config.root, 'client', 'favicon.ico')));

// parsers
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());


// views
app.set('views', `${config.root}/server/views`);
app.set('view engine', 'jade');


//registering the routes
routes(app);


// start the server
app.shy = server.listen(config.port, config.ip, () => {
    console.log(`Express listenisang on port ${config.port}, env = ${env}`);
    app.emit('app_start');
});


export default app;