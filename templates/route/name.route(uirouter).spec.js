/* jshint -W117, -W030 */
'use strict';

describe('<%= cameledName %> routes', function() {
    describe('state', function() {
        var view = '<%= htmlUrl %>';

        beforeEach(function() {
            module('<%= scriptAppName %>', bard.fakeToastr);
            bard.inject('$httpBackend', '$rootScope', '$state', '$templateCache');
        });

        beforeEach(function() {
            $templateCache.put(view, '');
        });

        it('should map state <%= name %> to url <%= route %> ', function() {
            expect($state.href('<%= name %>', {})).to.equal('<%= route %>');
        });

        it('should map <%= route %> route to <%= name %> View template', function() {
            expect($state.get('<%= name %>').templateUrl).to.equal(view);
        });

        it('of <%= name %> should work with $state.go', function() {
            $state.go('<%= name %>');
            $rootScope.$apply();
            expect($state.is('<%= name %>'));
        });
    });
});
