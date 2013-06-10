var path = require('path');

var pattern = function(file) {
  return {pattern: file, included: true, served: true, watched: false};
};

var framework = function(files) {
  files.unshift(pattern(path.join(__dirname, 'adapter.coffee')));
  files.unshift(pattern(path.join(__dirname, 'node_modules/chai/chai.js')));
};

framework.$inject = ['config.files'];
module.exports = {'framework:chai': ['factory', framework]};