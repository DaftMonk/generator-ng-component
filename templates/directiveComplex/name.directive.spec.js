/* jshint -W117, -W030 */
'use strict';

/**
 * Help for directive testing:
 * http://www.sitepoint.com/angular-testing-tips-testing-directives/
 */
describe('Directive: <%= prefixedCameledName %>', function() {
    var element;
    var scope;
    //var firstDivElement;

    // load the directive's module and view
    beforeEach(module('<%= scriptAppName %>'));
    beforeEach(module('<%= htmlUrl %>'));

    beforeEach(inject(function($compile, $rootScope) {
        // The minimum necessary template HTML for this spec.
        // The `when-done-animating` attribute is optional (as is the vm's implementation)
        //
        // N.B.: the attribute value is supposed to be an expression that invokes a $scope method
        //       so make sure the expression includes '()', e.g., "vm.onChange()"
        //
        // N.B.: We do NOT add this element to the browser DOM (although we could).
        //       spec runs faster if we don't touch the DOM (even the PhantomJS DOM).
        element = angular.element(
            '<<%= name %> config="vm.config" notify="{{vm.notify}}" on-change="vm.onChange()"></<%= name %>>'
        );

        // The spec examines changes to these template parts
        //firstDivElement = element.find('#first'); // first line

        // ng's $compile service resolves nested directives (there are none in this example)
        // and binds the element to the scope (which must be a real ng scope)
        scope = $rootScope.$new();
        scope.vm = {
            config: {
                prop: 'value'
            },
            notify: true,
        };
        scope.vm.onChange = sinon.spy();

        $compile(element)(scope);

        // tell angular to look at the scope values right now
        scope.$digest();
    }));
    describe('at initialization', function() {
        it('should applied template', function() {
            expect(element.html()).not.to.equal('');
        });
    });
    describe('- variables of the isolated scope -', function() {
        it('config on isolated scope should be two-way bound', function() {
            var isolatedScope = element.isolateScope();

            isolatedScope.vm.config.prop = 'value2';

            expect(scope.vm.config.prop).to.equal('value2');
        });
        it('notify on isolated scope should be one-way bound', function() {
            var isolatedScope = element.isolateScope();

            isolatedScope.vm.notify = false;

            expect(scope.vm.notify).to.be.true;
        });
        it('onChange should be a function', function() {
            var isolatedScope = element.isolateScope();

            expect(typeof(isolatedScope.vm.onChange)).to.equal('function');
        });
        it('should call onChange method of scope when invoked from isolated scope', function() {
            var isolatedScope = element.isolateScope();

            isolatedScope.vm.onChange();

            expect(scope.vm.onChange).to.have.been.called;
            // It can be written in multiple ways:
            //scope.vm.onChange.should.have.been.called;
            //expect(scope.vm.onChange).called;
        });
    });
});
