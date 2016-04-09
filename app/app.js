/**
 * Created by ITADMIN on 3/18/2016.
 */
define(['angular', 'angularRoute' ,'product/index', 'admin/index'],function (angular) {
    var app = angular.module('App',['ngRoute', 'Product', 'Admin']);


    app.config(Config);
    Config.$inject = ['$routeProvider'];
    function Config($routeProvider){
        $routeProvider
            .when('/home', {
                    templateUrl: 'app/home.html'
                }
            )
            .otherwise({redirectTo : '/home'});
    }
});