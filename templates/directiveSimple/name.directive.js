'use strict';

angular.module('<%= scriptAppName %>')
    .directive('<%= prefixedCameledName %>', function() {
        var directive = {
            restrict: 'EA',
            template: [
                '<div class="some-directive">',
                    '<p>',
                        'this is the <%= prefixedCameledName %> directive',
                    '</p>',
                '</div>'
            ].join(''),
            link: link
        };

        return directive;

        ////////////////

        function link(scope, element) {
            // Manipulate the DOM here if it is really necessary
            element.on('click', function() {
                // Handle click event
            });
        }
    });
