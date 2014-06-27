'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var chalk = require('chalk');


var NgComponentGenerator = yeoman.generators.Base.extend({

  info: function () {
    if(!this.options['skip-message']) {
      console.log(chalk.magenta('You\'re using the fantastic NgComponent generator.\n'));
      console.log(chalk.magenta('Initializing yo-rc.json configuration.\n'));
    }
  },

  saveConfig: function() {
    this.config.set('routeDirectory', this.options.routeDirectory || 'app/components/');
    this.config.set('directiveDirectory', this.options.directiveDirectory || 'app/components/');
    this.config.set('filterDirectory', this.options.filterDirectory || 'app/components/');
    this.config.set('serviceDirectory', this.options.serviceDirectory || 'app/components/');
    this.config.set('basePath', this.options.basePath || 'app');
    this.config.set('filters', this.options.filters || ['uirouter']);
    this.config.set('extensions', this.options.extensions || ['js', 'html', 'scss']);
  }
});

module.exports = NgComponentGenerator;