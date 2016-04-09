/**
 * Created by ITADMIN on 3/18/2016.
 */
define(['./module', '../product/product.service'],function(module){
    module.controller('AdminController', AdminController);
    AdminController.$inject = ['$scope', 'ProductService'];
    function AdminController($scope, ProductService){
        $scope.products = ProductService.getList();
    };
});