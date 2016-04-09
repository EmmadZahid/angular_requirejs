/**
 * Created by ITADMIN on 3/18/2016.
 */
define(['angular','angularRoute', '../product/module'],function(angular){
    return angular
        .module('Admin',['Product'])
        .config(function($routeProvider){
            $routeProvider
                .when('/Admin',{
                    templateUrl:'app/admin/admin.html',
                    controller: 'AdminController'
                })
        });
});