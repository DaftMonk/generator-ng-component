/* jshint -W117, -W030 */
'use strict';

describe('Controller: <%= controllerName %>', function() {
    var controller;

    // load the controller's module
    beforeEach(function() {
        module('<%= scriptAppName %>');
        // include previous module containing mocked service which will override actual service
        // , because it's declared later
        module('mock.<%= serviceName %>');
        module('mock.<%= dataServiceName %>');
        bard.inject('$controller', '$rootScope', '<%= serviceName %>', '<%= dataServiceName %>');
    });

    // Initialize the controller and a mock scope if it is needed
    beforeEach(inject(function($controller) {
        // Create a spy on the mocked service function and wait for the promise that was defined in the mock service
        sinon.spy(<%= dataServiceName %>, 'getThingsFromBackend');
        // Or we could use sinon.js to redefine the function of the service.
        //sinon.stub(<%= dataServiceName %>, 'getThingsFromBackend').returns($q.when('somethings'));
        controller = $controller('<%= controllerName %>');
        // IMPORTANT!!! Propagate promise resolution to 'then' functions using $apply().
        // Without this the then won't be called
        $rootScope.$apply();
    }));

    describe('<%= classedName %> controller', function() {
        it('should be created successfully', function() {
            expect(controller).to.be.defined;
        });

        describe('after activate', function() {
            it('should have exPublicVariable of exampleVar', function() {
                expect(controller.exPublicVariable).to.equal('exampleVar');
            });

            it('should call getThingsFromBackend on <%= dataServiceName %>', function() {
                expect(<%= dataServiceName %>.getThingsFromBackend).to.have.been.called;
            });

            it('should the someThing contain things', function() {
                expect(controller.someThing).to.equal('things');
            });
        });
    });
});
