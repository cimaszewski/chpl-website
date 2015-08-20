;(function () {
    'use strict';

    angular.module('app.admin')
        .directive('aiReports', ['commonService', 'authService', function (commonService, authService) {
            return {
                restrict: 'E',
                replace: true,
                templateUrl: 'admin/components/reports.html',
                link: function (scope, element, attrs) {
                    commonService.getCertifiedProductActivity()
                        .then(function (data) {
                            scope.searchedCertifiedProducts = data;
                            scope.displayedCertifiedProducts = [].concat(scope.searchedCertifiedProducts);
                        });
                    commonService.getVendorActivity()
                        .then(function (data) {
                            scope.searchedVendors = data;
                            scope.displayedVendors = [].concat(scope.searchedVendors);
                        });
                    commonService.getProductActivity()
                        .then(function (data) {
                            scope.searchedProducts = data;
                            scope.displayedProducts = [].concat(scope.searchedProducts);
                        });
                    commonService.getAcbActivity()
                        .then(function (data) {
                            scope.searchedACBs = data;
                            scope.displayedACBs = [].concat(scope.searchedACBs);
                        });
                    scope.isAcbAdmin = authService.isAcbAdmin();
                    scope.isChplAdmin = authService.isChplAdmin();
                }
            };
        }]);
})();
