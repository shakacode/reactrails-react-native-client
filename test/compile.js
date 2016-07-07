/* eslint no-underscore-dangle: ["error", { "allow": ["_compile"] }] */

const fs = require('fs');
const path = require('path');
const babel = require('babel-core');
const origJS = require.extensions['.js'];

require.extensions['.js'] = (module, _filename) => {
  let filename = _filename;
  if (filename.indexOf('node_modules/react-native/Libraries/react-native/react-native.js') >= 0) {
    filename = path.resolve('test/react-native.js');
  }
  if (filename.indexOf('node_modules/') >= 0) {
    return (origJS || require.extensions['.js'])(module, filename);
  }
  const source = fs.readFileSync(filename, 'utf8');
  const output = babel.transform(source, { filename }).code;
  return module._compile(output, filename);
};
