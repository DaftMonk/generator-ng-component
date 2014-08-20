'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var chalk = require('chalk');

var NgComponentGenerator = yeoman.generators.Base.extend({

  info: function () {
    if (!this.options['skip-message']) {
      console.log(chalk.magenta('You\'re using the fantastic NgComponent generator.\n'));
      console.log(chalk.magenta('Initializing yo-rc.json configuration.\n'));
    }
  },

  saveConfig: function () {
    this.config.defaults({
      'routeDirectory': this.options.routeDirectory || 'app/components/',
      'directiveDirectory': this.options.directiveDirectory || 'app/components/',
      'filterDirectory': this.options.filterDirectory || 'app/components/',
      'serviceDirectory': this.options.serviceDirectory || 'app/components/',
      'basePath': this.options.basePath || 'app',
      'filters': this.options.filters || ['uirouter'],
      'extensions': this.options.extensions || ['js', 'html', 'scss'],
      'directiveSimple': this.options.directiveSimple || '',
      'directiveComplex': this.options.directiveComplex || '',
      'filter': this.options.filter || '',
      'service': this.options.service || '',
      'factory': this.options.factory || '',
      'controller': this.options.controller || '',
      'decorator': this.options.decorator || '',
      'provider': this.options.provider || '',
      'route': this.options.route || ''
    });
  }
});

module.exports = NgComponentGenerator;