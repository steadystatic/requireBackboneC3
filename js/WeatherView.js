define(function(require) {
    var Backbone = require('backbone');
    var c3 = require('c3');
    var WeatherModel = require('../js/WeatherModel');

    var WeatherView = Backbone.View.extend({
        initialize: function(options){

            this.chartEl = options.chartEl;
            this.weatherInfo = {
                city: options.city,
                country: options.country,
                format: options.format,
                color: options.color
            };

            console.log('WeatherView :: initialize', this.chartEl);

            return this.render();
        },
        render: function(){

            var self = this;
            this.model = new WeatherModel(self.weatherInfo);

            this.model.fetch({
                success: function(data){
                    var list = data.attributes.list;
                    var temperatureList = self.getWeatherData(list,'main', 'temp');
                    var dateList = self.getWeatherData(list, '0', 'dt_txt');
                    var title = self.weatherInfo.city;
                    var color = self.weatherInfo.color;
                    
                    var ob = {
                        title: title,
                        list1: temperatureList,
                        list2: dateList,
                        chartEl: self.chartEl,
                        color: color
                    };
                    self.displayChart(ob);
                    
                },
                error: function(error){
                    console.log('error', error);
                }
            });
            
            console.log('WeatherView :: render', this.chartEl);
        },
        getWeatherData: function(list,lvl, prop){
            var listOfTemp = _.map(list, function(el){
                if (lvl == '0'){
                    return el[prop];
                } else {
                    return el[lvl][prop];
                }
            });

            return listOfTemp;
        },
        displayChart: function(options){
            var chart = c3.generate({
                bindto: options.chartEl,
                data: {
                    x: 'x',
                    xFormat: '%Y-%m-%d %H:%M:%S',
                    columns: [
                        ['Temperature'].concat(options.list1),
                        ['x'].concat(options.list2)
                    ],
                    types: {
                        Temperature: 'area-step',
                        Date: 'area'
                    },
                    colors: {
                        Temperature: options.color,
                        Date: '#000'
                    }
                },
                axis : {
                    x : {
                        type : 'timeseries',
                        tick: {
                            format: '%Y-%m-%d %H:%M'
                        }
                    }
                }
            });

            console.log('WeatherView :: displayChart');

            return chart;
        }
    });

    return WeatherView;
});