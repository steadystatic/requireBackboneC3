define(function(require) {

    var Backbone = require('backbone');
    var WeatherView = require('../js/WeatherView');

    var AppRouter = Backbone.Router.extend({
        routes: {
            '': 'index'
        },

        index: function() {
            console.log('Hit the base route.');
            
            var lviv = {
                chartEl: '#lviv', 
                city: 'Lviv', 
                country: 'ua', 
                format: 'json', 
                color: '#008ae6'
            };
            
            var sanJose = {
                chartEl: '#san-jose', 
                city: 'San Jose', 
                country: 'us', 
                format: 'json', 
                color: '#ff0000'};
            
            var lvivView = new WeatherView(lviv);
            
            //Have to do that, because max. requirest to server is 1 request/sec
            setTimeout(function(){
                var sanJoseView = new WeatherView(sanJose);
            }, 1000);
        }
    });

    return AppRouter;

});