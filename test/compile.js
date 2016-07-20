/* eslint no-underscore-dangle: ["error", { "allow": ["_compile"] }] */

const fs = require('fs');
const path = require('path');
const babel = require('babel-core');
require('babel-polyfill');
const origJS = require.extensions['.js'];
const defaultResolver = require('babel-resolver')(__dirname);

const pathIsRelative = (pathOrFile) => /^\./.test(pathOrFile);

const resolveIncludingAbsolutePaths = (source, filename) => {
  // if import path starts with ReactNativeTutorial (React packager syntax) look in the root folder
  const appName = 'ReactNativeTutorial';
  const appRegex = new RegExp(`^${appName}`);
  if (source.match(appRegex)) {
    const appModulePath = source.substring(appName.length + 1);
    return path.resolve(__dirname, '../', appModulePath);
  }

  return defaultResolver(source, filename);
};

const resolveIncludingPrefixes = (source, filename, nullablePrefix) => {
  const resolved = resolveIncludingAbsolutePaths(source, filename);
  if (resolved.match(/node_modules/)) return resolved;

  const prefix = nullablePrefix || '';
  const jsRegex = /\.js$/;
  const canonical = `${resolved.replace(jsRegex, '')}${prefix}.js`;
  try {
    const absolutePath = pathIsRelative(canonical) ?
      path.resolve(filename, '../', canonical) :
      canonical;
    fs.lstatSync(absolutePath);
    return absolutePath;
  } catch (e) {
    if (prefix) return null;
    const withIndex = resolveIncludingPrefixes(source, filename, '/index');
    if (withIndex) return withIndex;
    const platfrom = process.env.MOCHA_PLATFORM === 'android' ? '.android' : '.ios';
    const withPlatform = resolveIncludingPrefixes(source, filename, platfrom);
    if (withPlatform) return withPlatform;
    return resolved;
  }
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

  const source = fs.readFileSync(filename, 'utf8');
  const output = babel.transform(source, {
    filename,
    resolveModuleSource: resolveIncludingPrefixes,
  }).code;
  return module._compile(output, filename);
};
