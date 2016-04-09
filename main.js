/**
 * Created by ITADMIN on 3/22/2016.
 */
require.config({
    baseUrl: 'app',
    paths: {
        angular: '/bower_components/angular/angular',
        angularRoute: '/bower_components/angular-route/angular-route'
    },
    shim: {
        angular: {
            exports: "angular"
        },
        angularRoute: {
            deps: ["angular"],
            exports: "angularRoute"
        }
    }
});

require(['app/app.js', 'route.config'], function (app) {
    app.init();
});