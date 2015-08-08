/* jshint -W117, -W030 */
'use strict';

describe('Controller: <%= classedName %>Controller', function() {
    var controller;

    // load the controller's module
    beforeEach(module('<%= scriptAppName %>'));

    // Initialize the controller and a mock scope if it is needed
    beforeEach(inject(function($controller) {
        controller = $controller('<%= classedName %>Controller', {});
    }));

    describe('<%= classedName %> controller', function() {
        it('should be created successfully', function() {
            expect(controller).to.be.defined;
        });

        describe('after activate', function() {
            it('should have exPublicVariable of exampleVar', function() {
                expect(controller.exPublicVariable).to.equal('exampleVar');
            });
        });
    });
});
