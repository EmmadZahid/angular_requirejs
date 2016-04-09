/**
 * Created by ITADMIN on 3/18/2016.
 */

define(['./app', 'angularRoute', 'product/index','admin/admin.controller'],function (app) {
    app.config(Config);
    Config.$inject = ['$routeProvider'];
    function Config($routeProvider){
        $routeProvider
            
            .when('/Admin',{
                templateUrl:'app/admin/admin.html',
                controller: 'AdminController'
            })
            .otherwise({redirectTo : '/Product'});
    }
});
