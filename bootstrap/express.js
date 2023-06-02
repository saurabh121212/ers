'use strict';

const cors = require('cors');
const logger = require('morgan');
const methodOverride = require('method-override');
const express = require('express')

module.exports = function (app) {

    app.use(express.json())
    app.use(express.urlencoded({limit: '50mb', extended: true}));

    app.use(cors());

    app.use(methodOverride(function (req, res) {
        if (req.method.match(/patch/i)) {
            console.log("OVERRIDING patch WITH PATCH!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
            return 'PATCH';
        }
    }));

    app.use(logger('dev'));
};