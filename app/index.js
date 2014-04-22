'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var chalk = require('chalk');


var NgComponentGenerator = yeoman.generators.Base.extend({

  init: function () {
    this.on('end', function () {
      this.config.set('routeDirectory', 'app/components/');
      this.config.set('directiveDirectory', 'app/components/');
      this.config.set('filterDirectory', 'app/components/');
      this.config.set('serviceDirectory', 'app/components/');
      this.config.set('basePath', 'app');
      this.config.set('app', 'app/app.js');

      this.config.set('filters', ['uiRoute']);
      this.config.set('extensions', ['.js', '.html', '.scss']);
      this.config.set('app', 'app/app.js');
      this.config.save();
    });
  },

  info: function () {
    console.log(chalk.magenta('You\'re using the fantastic NgComponent generator.\n\n'));
    console.log(chalk.magenta('Initializing yo-rc.json configuration.\n'));
    console.log(chalk.magenta('Type `yo ng-component --help` for a list of available generators.'));
  }
});

module.exports = NgComponentGenerator;