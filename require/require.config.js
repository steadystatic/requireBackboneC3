'use strict';

require.config({
    shim: {
        underscore: {
            exports: '_'
        },
        backbone: {
            deps: [
                'underscore',
                'jquery'
            ],
            exports: 'Backbone'
        },
        d3: {
            exports: 'd3'
        },
        c3: {
            deps: [
                'd3'
            ],
            exports: 'c3'
        }
    },
    paths: {
        jquery: '../node_modules/jquery/dist/jquery',
        underscore: '../node_modules/underscore/underscore',
        backbone: '../node_modules/backbone/backbone',
        text: '../node_modules/requirejs-text/text',
        mustache: '../node_modules/mustache/mustache',
        d3: '../node_modules/d3/dist/d3',
        c3: '../node_modules/c3/c3'
    }
});

//Loading main module
requirejs(["../index"]);
