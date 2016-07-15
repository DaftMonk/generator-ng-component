'use strict';
import fs from 'fs';
import path from 'path';
import _ from 'lodash';

module.exports = {
  rewrite,
  rewriteFile,
  appName,
  copyTemplates,
  relativeUrl
};

export function rewriteFile(args) {
  args.path = args.path || process.cwd();
  var fullPath = path.join(args.path, args.file);

  args.haystack = fs.readFileSync(fullPath, 'utf8');
  var body = rewrite(args);

  fs.writeFileSync(fullPath, body);
}

function escapeRegExp(str) {
  return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
}

export function rewrite(args) {
  // check if splicable is already in the body text
  var re = new RegExp(args.splicable.map(line => `\s*${escapeRegExp(line)}`).join('\n'));

  if(re.test(args.haystack)) {
    return args.haystack;
  }

  var lines = args.haystack.split('\n');

  var otherwiseLineIndex = 0;
  lines.forEach((line, i) => {
    if(line.indexOf(args.needle) !== -1) {
      otherwiseLineIndex = i;
    }
  });

  var spaces = 0;
  while(lines[otherwiseLineIndex].charAt(spaces) === ' ') {
    spaces += 1;
  }

  var spaceStr = '';
  while((spaces -= 1) >= 0) {
    spaceStr += ' ';
  }

  lines.splice(otherwiseLineIndex, 0, args.splicable.map(line => spaceStr + line).join('\n'));

  return lines.join('\n');
}

export function appName(self) {
  var counter = 0;
  var suffix = self.options['app-suffix'];
  // Have to check this because of generator bug #386
  process.argv.forEach(val => {
    if(val.indexOf('--app-suffix') > -1) {
      counter++;
    }
  });
  if(counter === 0 || (typeof suffix === 'boolean' && suffix)) {
    suffix = 'App';
  }
  return suffix ? self.lodash.classify(suffix) : '';
}

function createFileName(template, name) {
  // Find matches for parans
  var filterMatches = template.match(/\(([^)]+)\)/g);
  var filter = '';
  if(filterMatches) {
    filter = filterMatches[0].replace('(', '').replace(')', '');
    template = template.replace(filterMatches[0], '');
  }

  return { name: template.replace('name', name), filter };
}

function templateIsUsable(processedName, self) {
  var filters = self.config.get('filters') || [];
  var include = true;

  if(processedName.filter && filters.indexOf(processedName.filter) === -1) {
    include = false;
  }

  var index = processedName.name.lastIndexOf('.');
  var ext = processedName.name.slice(index + 1);
  var extensions = self.config.get('extensions') || [];

  return extensions.indexOf(ext) >= 0 && include;
}

export function copyTemplates(self, type, templateDir, configName) {
  templateDir = templateDir || path.join(self.sourceRoot(), type);
  configName = configName || `${type}Templates`;

  if(self.config.get(configName)) {
    templateDir = path.join(process.cwd(), self.config.get(configName));
  }

  var useTypeScript = self.config.get('extensions').indexOf('ts') > -1;

  var files = _(fs.readdirSync(templateDir))
    .map(function(template) {
      var processedName = createFileName(template, self.name);
      var fileName = processedName.name;
      var templateFile = path.join(templateDir, template);
      var dest = path.join(self.dir, fileName);
      if(useTypeScript && dest.indexOf('.json') === -1) {
        dest = dest.replace('.js', '.ts');
      }

      return {
        processedName,
        fileName,
        templateFile,
        dest
      };
    })
    .filter(templateObj => templateIsUsable(templateObj.processedName, self))
    .value();

  files.forEach(templateObj => {
    self.fs.copyTpl(templateObj.templateFile, templateObj.dest, self);
  });
}

export function relativeUrl(basePath, targetPath) {
  var relativePath = path.relative(basePath, targetPath);
  return relativePath.split(path.sep).join('/');
}
