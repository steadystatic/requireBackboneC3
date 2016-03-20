define(["jquery", "underscore", "backbone", "c3"],
    function ($, _, Backbone, c3) {
        console.log('Loaded from require.....');
        console.log("Test output");
        console.log("$: " + typeof $);
        console.log("_: " + typeof _);
        console.log("Backbone: " + typeof Backbone);
        console.log("c3: " + typeof c3);
    }
);