'use strict';
import path from 'path';
import {exec} from 'child_process';
import _ from 'lodash';
import s from 'underscore.string';
import Promise from 'bluebird';
import semver from 'semver';
import {appName} from './util.js';

// extend lodash with underscore.string
_.mixin(s.exports());

/**
 * Run the given command in a child process
 * @param {string} cmd - command to run
 * @returns {Promise}
 */
function runCmd(cmd) {
  return new Promise((resolve, reject) => {
    exec(cmd, {}, function(err, stdout) {
      if(err) {
        console.error(stdout);
        return reject(err);
      }

      return resolve(stdout);
    });
  });
}

export default function() {
  this.argument('name', { type: String, required: false });

  this.lodash = _;

  var yoCheckPromise;

  // CI won't have yo installed
  if(!process.env.CI) {
    yoCheckPromise = runCmd('yo --version').then(stdout => {
      if(!semver.satisfies(semver.clean(stdout), '>= 1.7.1')) {
        throw new Error('ERROR: You need to update yo to at least 1.7.1 (npm i -g yo)');
      }
    });
  } else {
    yoCheckPromise = Promise.resolve();
  }

  try {
    this.appname = require(path.join(process.cwd(), 'bower.json')).name;
  } catch(err) {
    this.appname = path.basename(process.cwd());
  }
  this.appname = _.slugify(_.humanize(this.appname));
  this.scriptAppName = this.config.get('moduleName') || _.camelize(this.appname) + appName(this);

  this.cameledName = _.camelize(this.name);
  this.classedName = _.classify(this.name);
  this.kebabName = _.kebabCase(this.name);

  this.filters = this.config.get('filters');
  this.extensions = this.config.get('extensions');
  this.hasFilter = filter => this.filters.indexOf(filter) !== -1;
  this.hasExtension = ext => this.extensions.indexOf(ext) !== -1;

  this.scriptExt = this.hasExtension('ts') ? 'ts' : 'js';
  this.templateExt = this.hasExtension('pug') ? 'pug' : 'html';
  this.styleExt = this.hasExtension('sass') ? 'scss' :
    this.hasExtension('less') ? 'less' :
    this.hasExtension('stylus') ? 'styl' :
    'css';

  // dynamic assertion statements
  this.expect = () => this.hasFilter('expect') ? 'expect(' : '';
  this.to = () => this.hasFilter('expect') ? ').to' : '.should';

  if(typeof this.env.options.appPath === 'undefined') {
    try {
      this.env.options.appPath = require(path.join(process.cwd(), 'bower.json')).appPath;
    } catch(err) {}
    this.env.options.appPath = this.env.options.appPath || 'app';
  }

  this.sourceRoot(path.join(__dirname, '..', '/templates'));

  return yoCheckPromise;
}
