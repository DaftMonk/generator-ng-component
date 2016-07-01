'use strict';
var util = require('util');
var path = require('path');
var lodash = require('lodash');
var s = require('underscore.string');
var yeoman = require('yeoman-generator');
var ngUtils = require('./util.js');
var Promise = require('bluebird');
var exec = require('child_process').exec;
var semver = require('semver');

// extend lodash with underscore.string
lodash.mixin(s.exports());

/**
 * Run the given command in a child process
 * @param {string} cmd - command to run
 * @returns {Promise}
 */
function runCmd(cmd) {
  return new Promise(function(resolve, reject) {
    exec(cmd, {}, function(err, stdout, stderr) {
      if(err) {
        console.error(stdout);
        return reject(err);
      } else {
        return resolve(stdout);
      }
    });
  });
}

var Generator = module.exports = function Generator() {
  yeoman.Base.apply(this, arguments);
  this.argument('name', { type: String, required: false });

  this.lodash = lodash;

  var yoCheckPromise;

  // CI won't have yo installed
  if(!process.env.CI) {
    yoCheckPromise = runCmd('yo --version').then(function(stdout) {
      if(!semver.satisfies(semver.clean(stdout), '>= 1.7.1')) {
        throw new Error('ERROR: You need to update yo to at least 1.7.1 (npm i -g yo)');
      }
    });
  } else {
    yoCheckPromise = Promise.resolve();
  }

  try {
    this.appname = require(path.join(process.cwd(), 'bower.json')).name;
  } catch (e) {
    this.appname = path.basename(process.cwd());
  }
  this.appname = lodash.slugify(lodash.humanize(this.appname));
  this.scriptAppName = this.config.get('moduleName') || lodash.camelize(this.appname) + ngUtils.appName(this);

  this.cameledName = lodash.camelize(this.name);
  this.classedName = lodash.classify(this.name);
  this.kebabName = lodash.kebabCase(this.name);

  this.hasFilter = function(filter) {
    return this.config.get('filters').indexOf(filter) !== -1;
  }.bind(this);

  // dynamic assertion statements
  this.expect = function() {
    return this.hasFilter('expect') ? 'expect(' : '';
  }.bind(this);
  this.to = function() {
    return this.hasFilter('expect') ? ').to' : '.should';
  }.bind(this);

  if (typeof this.env.options.appPath === 'undefined') {
    try {
      this.env.options.appPath = require(path.join(process.cwd(), 'bower.json')).appPath;
    } catch (e) {}
    this.env.options.appPath = this.env.options.appPath || 'app';
  }

  this.sourceRoot(path.join(__dirname, '/templates'));

  return yoCheckPromise;
};

util.inherits(Generator, yeoman.Base);
