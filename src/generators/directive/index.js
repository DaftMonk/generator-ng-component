'use strict';
import path from 'path';
import {Base} from 'yeoman-generator';
import chalk from 'chalk';
import ngUtil from '../util';
import scriptBase from '../script-base.js';

class Generator extends Base {
  constructor(...args) {
    super(...args);

    scriptBase.call(this);
  }

  prompting() {
    var prompts = [{
      name: 'moduleName',
      message: 'What module name would you like to use?',
      default: `${this.scriptAppName}.${this.name}`,
      when: () => this.config.get('modulePrompt')
    }, {
      name: 'dir',
      message: 'Where would you like to create this directive?',
      default: this.config.get('directiveDirectory')
    }, {
      type: 'confirm',
      name: 'complex',
      message: 'Does this directive need an external html file?',
      default: true
    }];

    return this.prompt(prompts).then(props => {
      this.scriptAppName = props.moduleName || this.scriptAppName;
      this.dir = path.join(props.dir, this.name);
      this.complex = props.complex;
    });
  }

  writing() {
    var configName = 'directiveSimpleTemplates';
    var templateDir = path.join(this.sourceRoot(), 'directiveSimple');
    if(this.complex) {
      configName = 'directiveComplexTemplates';
      templateDir = path.join(this.sourceRoot(), 'directiveComplex');
    }

    var basePath = this.config.get('basePath') || '';
    this.htmlUrl = ngUtil.relativeUrl(basePath, path.join(this.dir, this.name + '.html'));
    ngUtil.copyTemplates(this, 'directive', templateDir, configName);
  }
}

module.exports = Generator;
