;(function () {
    'use strict';

    describe('app.nav module', function () {

        beforeEach(module('app.nav'));

        describe('nav controller', function () {
            var scope, $location, createController;

            beforeEach(inject(function ($rootScope, $controller, _$location_) {
                $location = _$location_;
                scope = $rootScope.$new();

                createController = function () {
                    return $controller('navigationController', {
                        '$scope': scope
                    });
                };
            }));

            it('should have a method to check if the path is active', function () {
                var controller = createController();
                $location.path('/privacy');
                expect($location.path()).toBe('/privacy');
                expect(scope.isActive('/privacy')).toBe(true);
                expect(scope.isActive('/view1')).toBe(false);
            });
        });
    });
})();