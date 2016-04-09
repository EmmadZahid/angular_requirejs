/**
 * Created by ITADMIN on 3/22/2016.
 */
require.config({
    //baseUrl: 'app',
    paths: {
        angular: '../bower_components/angular/angular',
        angularRoute: '../bower_components/angular-route/angular-route'
    },
    // The shim config allows us to configure dependencies for
    // scripts that do not call define() to register a module
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

require(['app'], function (app) {
    angular.bootstrap(document, ['App']);
});