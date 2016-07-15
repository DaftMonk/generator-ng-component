'use strict';
import {Base} from 'yeoman-generator';
import chalk from 'chalk';

class Generator extends Base {
  initializing() {
    if(!this.options['skip-message']) {
      this.log(chalk.magenta('You\'re using the fantastic NgComponent generator.\n'));
      this.log(chalk.magenta('Initializing yo-rc.json configuration.\n'));
    }
  }

  configuring() {
    var config = {
      routeDirectory: this.options.routeDirectory || 'app/components/',
      directiveDirectory: this.options.directiveDirectory || 'app/components/',
      componentDirectory: this.options.componentDirectory || 'app/components/',
      filterDirectory: this.options.filterDirectory || 'app/components/',
      serviceDirectory: this.options.serviceDirectory || 'app/components/',
      basePath: this.options.basePath || 'app',
      moduleName: this.options.moduleName || '',
      modulePrompt: {}.hasOwnProperty.call(this.options, 'modulePrompt') ? this.options.modulePrompt : true,
      filters: this.options.filters || ['uirouter', 'jasmine'],
      extensions: this.options.extensions || ['js', 'html', 'scss'],
      directiveSimpleTemplates: this.options.directiveSimple || '',
      directiveComplexTemplates: this.options.directiveComplex || '',
      filterTemplates: this.options.filter || '',
      serviceTemplates: this.options.service || '',
      factoryTemplates: this.options.factory || '',
      controllerTemplates: this.options.controller || '',
      componentTemplates: this.options.component || '',
      decoratorTemplates: this.options.decorator || '',
      providerTemplates: this.options.provider || '',
      routeTemplates: this.options.route || ''
    };

    if(this.options.forceConfig) {
      this.config.set(config);
      this.config.forceSave();
    } else {
      this.config.defaults(config);
    }
  }
}

module.exports = Generator;
