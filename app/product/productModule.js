;(function () {
    'use strict';

    angular.module('app.product', ['ngRoute', 'app.common', 'ui.bootstrap'])
        .constant('searchAPI', 'http://ainq.com')
        .config(['$routeProvider', function($routeProvider) {
            $routeProvider.when('/product/:id', {
                templateUrl: 'product/product.html'
            });
        }]);
})();
