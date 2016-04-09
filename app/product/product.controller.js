/**
 * Created by ITADMIN on 3/18/2016.
 */
define(['angular','./module','./product.service'], function(angular, module){
    module.controller('ProductController',ProductController);
    ProductController.$inject = ['$scope', 'ProductService'];
    function ProductController($scope, ProductService){
        $scope.products = ProductService.getList();
    };
});
