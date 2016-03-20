define(function(require) {

    var Backbone = require('backbone');

    var WeatherModel = Backbone.Model.extend({
        initialize: function(options){
            this.appID = 'b7cc4325d1daa0357762bfeb07872db6';
            this.city = options.city || 'San Jose';
            this.country = options.country || 'US';
            this.format = options.format || 'json';
        },
        url: function(){
            var staticUrl = 'http://api.openweathermap.org/data/2.5/forecast';
            var url = staticUrl + '?q=' + this.city + ',' + this.country + '&mode=' + this.format + '&appid=' + this.appID + '&units=metric';
            return url;
        }
    });

    return WeatherModel;
});
