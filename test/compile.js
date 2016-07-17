/* eslint no-underscore-dangle: ["error", { "allow": ["_compile"] }] */

const fs = require('fs');
const path = require('path');
const babel = require('babel-core');
require('babel-polyfill');
const origJS = require.extensions['.js'];
const defaultResolver = require('babel-resolver')(__dirname);

const resolveModuleSource = (source, filename) => {
  // if import path starts with ReactNativeTutorial (React packager syntax) look in the root folder
  const appName = 'ReactNativeTutorial';
  const appRegex = new RegExp(`^${appName}`);
  if (source.match(appRegex)) {
    const appModulePath = source.substring(appName.length + 1);
    return path.resolve(__dirname, '../', appModulePath);
  }

  return defaultResolver(source, filename);
};

require.extensions['.js'] = (module, _filename) => {
  let filename = _filename;

  // Mock react native lib
  if (filename.indexOf('node_modules/react-native/Libraries/react-native/react-native.js') >= 0) {
    filename = path.resolve('test/react-native.js');
  }

  // Don't apply babel to node modules
  if (filename.indexOf('node_modules/') >= 0) {
    return (origJS || require.extensions['.js'])(module, filename);
  }

  // Convert all absolute paths from React Native format to node format
  // const appName = 'ReactNativeTutorial';
  // const appRegex = new RegExp(`^${appName}`);
  // if (filename.match(appRegex)) filename = filename.substring(appName.length);

  const source = fs.readFileSync(filename, 'utf8');
  const output = babel.transform(source, { filename, resolveModuleSource }).code;
  return module._compile(output, filename);
};
