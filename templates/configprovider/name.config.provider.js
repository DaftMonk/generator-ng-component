'use strict';

/**
 * This config will be accessible like <%= cameledName %>Config.config.VariableName
 * after injected the <%= cameledName %>Config int the component.
 * And it can be used in a config block like <%= cameledName %>ConfigProvider.VariableName(value);
 */
angular.module('<%= scriptAppName %>')
    .provider('<%= cameledName %>Config', function() {

        /* jshint validthis:true */
        var config = {};

        /**
         * Set the exConfigVariable
         *
         * @param {Object} value
         */
        this.setExConfigVariable = function(value) {
            config.exConfigVariable = value;
        };

        this.$get = function() {
            return {
                config: config
            };
        };
    });
