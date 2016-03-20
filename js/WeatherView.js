define(function(require) {
    //var _ = require('underscore');
    var Backbone = require('backbone');
    var c3 = require('c3');
    var WeatherModel = require('../js/WeatherModel');

    var WeatherView = Backbone.View.extend({
        initialize: function(options){

            this.chartEl = options.chartEl;
            this.weatherInfo = {
                city: options.city,
                country: options.country,
                format: options.format
            };

            console.log('WeatherView :: initialize', this.chartEl);

            return this.render();
        },
        render: function(){
            
            var self = this;
            var model = new WeatherModel(self.weatherInfo);

            console.log('WeatherView :: render', this.chartEl);

            model.fetch({
                success: function(data){
                    var list = data.attributes.list;
                    var temperatureList = self.getTemperature(list);
                    var title = self.weatherInfo.city;
                    var chart = c3.generate({
                        bindto: self.chartEl,
                        data: {
                            columns: [
                                [title].concat(temperatureList)
                            ],
                            types: {
                                title: 'area-spline'
                            },
                            colors: {
                                title: '#ff0000'
                            }
                        }
                    });

                },
                error: function(error){
                    console.log('error', error);
                }
            });
        },
        getTemperature: function(list){
            var listOfTemp = _.map(list, function(el){
                return el.main.temp;
            });

            return listOfTemp;
        }
    });

    return WeatherView;
});