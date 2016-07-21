'use strict';
import path from 'path';
import {Base} from 'yeoman-generator';
import {relativeUrl, copyTemplates} from '../util';
import scriptBase from '../script-base.js';

class Generator extends Base {
  initializing() {
    return scriptBase.call(this);
  }

  prompting() {
    var prompts = [{
      name: 'moduleName',
      message: 'What module name would you like to use?',
      default: `${this.scriptAppName}.${this.name}`,
      when: () => this.config.get('modulePrompt')
    }, {
      name: 'dir',
      message: 'Where would you like to create this route?',
      default: this.config.get('routeDirectory')
    }, {
      name: 'route',
      message: 'What will the url of your route be?',
      default: `/${this.name}`
    }];

    return this.prompt(prompts).then(props => {
      this.scriptAppName = props.moduleName || this.scriptAppName;
      this.route = props.route;
      this.dir = path.join(props.dir, this.name);
    });
  }

  writing() {
    var basePath = this.config.get('basePath') || '';
    this.htmlUrl = relativeUrl(basePath, path.join(this.dir, `${this.name}.${this.templateExt}`));
    copyTemplates(this, 'route');
  }
}

module.exports = Generator;
