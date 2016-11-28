'use strict';
import path from 'path';
import fs from 'fs';
import helpers from 'yeoman-test';
import yoAssert from 'yeoman-assert';
import Promise from 'bluebird';

Promise.promisifyAll(fs); // eslint-disable-line no-use-extend-native/no-use-extend-native

const TEST_DIR = __dirname;
const DEBUG = process.env.DEBUG || false;

/**
 * Copy file from src to dest
 * @param {string} src
 * @param {string} dest
 * @returns {Promise}
 */
export function copyAsync(src, dest) {
  return fs.readFileAsync(src)
    .then(data => fs.writeFileAsync(dest, data));
}

/**
 * Run ng-fullstack generators
 * @param {String} genName - which generator to run
 * @param {String} name - name argument passed to generator
 * @param {object} [opts={}]
 * @param {object} [opts.prompts]
 * @param {String} [opts.config='default'] - which config file to use (default/custom)
 * @returns {Promise}
 */
export function runGen(genName, name, opts={}) {
  let prompts = opts.prompts;
  let config = opts.config || 'default';

  let gen = helpers
    .run(require.resolve(`../generators/${genName}`))
    .inTmpDir(function(dir) {
      // this will create a new temporary directory for each new generator run
      var done = this.async();
      if(DEBUG) {
        console.log(`TEMP DIR: ${dir}`);
      }

      // symlink our dependency directories
      return copyAsync(path.join(TEST_DIR, `fixtures/.yo-rc.${config}.json`), path.join(dir, '.yo-rc.json'))
        .then(done);
    })
    .withPrompts(prompts)
    .withArguments([name]);

  return gen.toPromise();
}

describe('with default configuration', function() {
  describe('Route', function() {
    it('should generate a new route', function() {
      return runGen('route', 'foo', {
        prompts: {
          dir: 'app/components/',
          route: '/foo'
        }
      }).then(() => {
        yoAssert.file([
          path.join('app/components/foo', 'foo.html'),
          path.join('app/components/foo', 'foo.scss'),
          path.join('app/components/foo', 'foo.component.js'),
          path.join('app/components/foo', 'foo.component.spec.js'),
          path.join('app/components/foo', 'foo.routes.js')
        ]);
      });
    });
  });

  describe('Directive', function() {
    it('should generate a new complex directive', function() {
      return runGen('directive', 'foo', {
        prompts: {
          dir: 'app/components/',
          complex: true
        }
      }).then(() => {
        yoAssert.file([
          path.join('app/components/foo', 'foo.html'),
          path.join('app/components/foo', 'foo.scss'),
          path.join('app/components/foo', 'foo.directive.js'),
          path.join('app/components/foo', 'foo.directive.js')
        ]);
      });
    });

    it('should generate a new simple directive', function() {
      return runGen('directive', 'foo', {
        prompts: {
          dir: 'app/components/',
          complex: false
        }
      }).then(() => {
        yoAssert.file([
          path.join('app/components/foo', 'foo.directive.js'),
          path.join('app/components/foo', 'foo.directive.spec.js')
        ]);
        yoAssert.noFile([
          path.join('app/components/foo', 'foo.scss'),
          path.join('app/components/foo', 'foo.html')
        ]);
      });
    });
  });

  describe('Service', function() {
    it('should generate a new service', function() {
      return runGen('service', 'foo', {
        prompts: {
          dir: 'app/components/'
        }
      }).then(() => {
        yoAssert.file([
          path.join('app/components/foo', 'foo.service.js'),
          path.join('app/components/foo', 'foo.service.spec.js')
        ]);
      });
    });
  });

  describe('Factory', function() {
    it('should generate a new factory', function() {
      return runGen('factory', 'foo', {
        prompts: {
          dir: 'app/components/'
        }
      }).then(() => {
        yoAssert.file([
          path.join('app/components/foo', 'foo.service.js'),
          path.join('app/components/foo', 'foo.service.spec.js')
        ]);
      });
    });
  });

  describe('Filter', function() {
    it('should generate a new filter', function() {
      return runGen('filter', 'foo', {
        prompts: {
          dir: 'app/components/'
        }
      }).then(() => {
        yoAssert.file([
          path.join('app/components/foo', 'foo.filter.js'),
          path.join('app/components/foo', 'foo.filter.spec.js')
        ]);
      });
    });
  });

  describe('Component', function() {
    it('should generate a new component', function() {
      return runGen('component', 'foo', {
        prompts: {
          dir: 'app/components/'
        }
      }).then(() => {
        yoAssert.file([
          path.join('app/components/foo', 'foo.component.js'),
          path.join('app/components/foo', 'foo.component.spec.js')
        ]);
      });
    });
  });
});

describe('with custom configuration', function() {
  describe('Route', function() {
    it('should generate a new route', function() {
      return runGen('route', 'foo', {
        prompts: {
          dir: 'client/app/',
          route: '/foo'
        },
        config: 'custom'
      }).then(() => {
        yoAssert.file([
          path.join('client/app/foo', 'foo.pug'),
          path.join('client/app/foo', 'foo.less'),
          path.join('client/app/foo', 'foo.component.ts'),
          path.join('client/app/foo', 'foo.component.spec.ts'),
          path.join('client/app/foo', 'foo.routes.ts')
        ]);
      });
    });
  });

  describe('Directive', function() {
    it('should generate a new complex directive', function() {
      return runGen('directive', 'foo', {
        prompts: {
          dir: 'client/app/',
          complex: true
        },
        config: 'custom'
      }).then(() => {
        yoAssert.file([
          path.join('client/app/foo', 'foo.pug'),
          path.join('client/app/foo', 'foo.less'),
          path.join('client/app/foo', 'foo.directive.ts'),
          path.join('client/app/foo', 'foo.directive.ts')
        ]);
      });
    });

    it('should generate a new simple directive', function() {
      return runGen('directive', 'foo', {
        prompts: {
          dir: 'client/app/',
          complex: false
        },
        config: 'custom'
      }).then(() => {
        yoAssert.file([
          path.join('client/app/foo', 'foo.directive.ts'),
          path.join('client/app/foo', 'foo.directive.spec.ts')
        ]);
        yoAssert.noFile([
          path.join('client/app/foo', 'foo.less'),
          path.join('client/app/foo', 'foo.pug')
        ]);
      });
    });
  });

  describe('Service', function() {
    it('should generate a new service', function() {
      return runGen('service', 'foo', {
        prompts: {
          dir: 'client/app/'
        },
        config: 'custom'
      }).then(() => {
        yoAssert.file([
          path.join('client/app/foo', 'foo.service.ts'),
          path.join('client/app/foo', 'foo.service.spec.ts')
        ]);
      });
    });
  });

  describe('Factory', function() {
    it('should generate a new factory', function() {
      return runGen('factory', 'foo', {
        prompts: {
          dir: 'client/app/'
        },
        config: 'custom'
      }).then(() => {
        yoAssert.file([
          path.join('client/app/foo', 'foo.service.ts'),
          path.join('client/app/foo', 'foo.service.spec.ts')
        ]);
      });
    });
  });

  describe('Filter', function() {
    it('should generate a new filter', function() {
      return runGen('filter', 'foo', {
        prompts: {
          dir: 'client/app/'
        },
        config: 'custom'
      }).then(() => {
        yoAssert.file([
          path.join('client/app/foo', 'foo.filter.ts'),
          path.join('client/app/foo', 'foo.filter.spec.ts')
        ]);
      });
    });
  });

  describe('Controller', function() {
    it('should generate a new controller', function() {
      return runGen('controller', 'foo', {
        prompts: {
          dir: 'client/app/'
        },
        config: 'custom'
      }).then(() => {
        yoAssert.file([
          path.join('client/app/foo', 'foo.controller.ts'),
          path.join('client/app/foo', 'foo.controller.spec.ts')
        ]);
      });
    });
  });

  describe('Decorator', function() {
    it('should generate a new decorator', function() {
      return runGen('decorator', 'foo', {
        prompts: {
          dir: 'client/app/'
        },
        config: 'custom'
      }).then(() => {
        yoAssert.file([
          path.join('client/app/foo', 'foo.decorator.ts')
        ]);
      });
    });
  });

  describe('Provider', function() {
    it('should generate a new provider', function() {
      return runGen('provider', 'foo', {
        prompts: {
          dir: 'client/app/'
        },
        config: 'custom'
      }).then(() => {
        yoAssert.file([
          path.join('client/app/foo', 'foo.service.ts'),
          path.join('client/app/foo', 'foo.service.spec.ts')
        ]);
      });
    });
  });

  describe('Component', function() {
    it('should generate a new component', function() {
      return runGen('component', 'foo', {
        prompts: {
          dir: 'app/components/'
        },
        config: 'custom'
      }).then(() => {
        yoAssert.file([
          path.join('app/components/foo', 'foo.component.ts'),
          path.join('app/components/foo', 'foo.component.spec.ts')
        ]);
      });
    });
  });
});
