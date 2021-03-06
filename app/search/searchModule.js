;(function () {
    'use strict';

    angular.module('app.search', ['ngRoute', 'ngStorage', 'smart-table', 'app.common'])
        .constant('searchAPI', 'http://ainq.com')
        .config(['$routeProvider', function($routeProvider) {
            $routeProvider.when('/search', {
                templateUrl: 'search/search.html'
            });
        }]);
})();
