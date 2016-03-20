define(function(require) {

    var Backbone = require('backbone');
    var AppRouter = require('../js/AppRouter');

    var App = {
        start: function() {
            console.log('In the app, now.');
            var appRouter = new AppRouter();
            Backbone.history.start();
        }
    };

    App.start();

});