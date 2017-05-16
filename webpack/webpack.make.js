'use strict';

var PATHS = require('./webpack.paths.js');
var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;

module.exports = function makeWebpackConfig(options) {
    
    var BUILD = !!options.BUILD;
    var TEST = !!options.TEST;
    var DEV = !!options.DEV;

    var config = {};


    /**
     * Entry
     */
    if(TEST) {
        config.entry = function(){return {}};
    } else {
        config.entry = {
            app: PATHS.APP,
            polyfills: PATHS.POLYFILLS,
            vendor: PATHS.VENDORS
        }
    }


    /**
     * Output
     */
    if(TEST) {
        config.output = function(){return {}};
    } else {
        config.output = {
            path: BUILD ? PATHS.BUILD_CLIENT : PATHS.TMP,

            publicPath: BUILD || DEV ? '/' : `http://localhost:${8080}/`,

            filename: BUILD ? '[name].[chunkhash].js' : '[name].bundle.js',

            chunkFilename: BUILD ? '[name].[chunkhash].js' : '[name].bundle.js'
        };
    }


    config.resolve = {};


    /**
     * Devtool
     */
    if(TEST) {
        config.devtool = 'inline-source-map';
    } else if(DEV) {
        config.devtool = 'source-map';
    } else {
        config.devtool = 'cheap-module-source-map';
    }


    /**
     * Loaders
     */
    config.module = {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: ['babel-loader'],
        }, {
            test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)([\?]?.*)$/,
            use: ['file-loader']
        }, {
            test: /\.html$/,
            use: ['raw-loader']
        }, {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: 'css-loader?sourceMap'
            })
        }, {
            test: /\.scss$/,
            use: [
                'style-loader',
                'css-loader',
                'resolve-url-loader',
                'sass-loader?sourceMap'
            ],
            include: [
                path.resolve(PATHS.NODE_MODULES, '/materialize-css/sass/*.scss'),
                PATHS.SASS
            ]
        }]
    };


    /**
     * Plugins
     */
    config.plugins = [

        new ExtractTextPlugin({
            filename: '[name].[hash].css',
            disable: !BUILD || TEST
        }),

        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
            "window.jquery": "jquery",
            Hammer: "hammerjs/hammer"
        }),

        new HtmlWebpackPlugin({
            template: PATHS.INDEX_HTML,
            filename: 'index.html',
            alwaysWriteToDisk: true
        }),

        new HtmlWebpackHarddiskPlugin(),

        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: BUILD ? JSON.stringify("production") : ( TEST ? JSON.stringify("test") : JSON.stringify("development") )
            }
        })
    ];


    if(!TEST) {
        config.plugins.push(
            new CommonsChunkPlugin({
                name: ['vendor'],
                minChunks: Infinity
            }));
    }


    if(BUILD) {
        config.plugins.push(

            new webpack.NoEmitOnErrorsPlugin(),

            new webpack.optimize.UglifyJsPlugin({
                mangle: false,
                output: {
                    comments: false
                },
                compress: {
                    warnings: false
                }
            })

        );
    }

    config.cache = DEV;

    if(TEST) {
        config.stats = {
            colors: true,
            reasons: true
        };
        config.debug = false;

    }


    /**
     * Dev server configuration
     */
    config.devServer = {
        contentBase: '/',
        historyApiFallback: true,
        stats: {
            modules: false,
            cached: false,
            colors: true,
            chunk: false
        }
    };

    return config;
};
