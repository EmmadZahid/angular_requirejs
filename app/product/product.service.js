/**
 * Created by ITADMIN on 3/18/2016.
 */
define(['./module'], function(module){
    module.factory('ProductService',ProductService);

    // Product.$inject = [''];
    function ProductService() {
        return { getList: getList };

        function getList() {
            return ["Laptop","Mouse","Keyboard","Cable","Mobile"];
        };
    };
});
