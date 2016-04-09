/**
 * Created by ITADMIN on 3/18/2016.
 */
define(['angular','angularRoute']
    , function( angular ){
    return angular.module('Product', [
        'ngRoute'
    ]).config(function($routeProvider){
        $routeProvider
            .when('/Product',{
            templateUrl:'app/product/product.html',
            controller: 'ProductController'
        })
    });
});