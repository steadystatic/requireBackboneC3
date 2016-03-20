define(function(require) {

    var Backbone = require('backbone');
    var WeatherView = require('../js/WeatherView');

    var AppRouter = Backbone.Router.extend({
        routes: {
            '': 'index'
        },

        index: function() {
            console.log('Hit the base route.');

            var lvivView = new WeatherView({chartEl: '#lviv', city: 'Lviv', country: 'ua', format: 'json'});
            setTimeout(function(){
                var sanJoseView = new WeatherView({chartEl: '#san-jose', city: 'San Jose', country: 'us', format: 'json'});
            }, 1000);
        }
    });

    return AppRouter;

});