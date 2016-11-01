'use strict';

let webpack = require('webpack');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let CopyWebpackPlugin = require('copy-webpack-plugin');

let jsVendorDependencies = findVendorDependencies(__dirname);

module.exports = {
  entry: {
    app: [ 'babel-polyfill', 'whatwg-fetch', 'index.js' ],
    vendor: jsVendorDependencies
  },
  devtool: 'inline-source-map',
  resolve: {
    modulesDirectories: [ 'src', 'node_modules' ]
  },
  output: {
    path: './bin',
    filename: 'app.bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules|lib/,
        loader: 'babel',
        query: {
          presets: [ 'es2015-ie', 'react' ]
        }
      },
      { test: /\.css$/, loader: 'style-loader!css-loader!postcss-loader' },
      { test: /\.(woff|woff2)$/, loader: 'url-loader?limit=10000&mimetype=application/font-woff' },
      { test: /\.ttf$/, loader: 'file-loader' },
      { test: /\.eot$/, loader: 'file-loader' },
      { test: /\.svg$/, loader: 'file-loader' },
      { test: /\.(png|jpg|gif|ico)$/, loader: 'file?name=images/[name].[ext]' },
      { test: /\.json$/, loader: 'json-loader' }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({ name: 'vendor', filename: 'vendor.bundle.js' }),
    new HtmlWebpackPlugin({ template: 'src/index.html' }),
    new CopyWebpackPlugin([
      { from: 'src/images', to: 'images' }
    ])
  ]
};

function findVendorDependencies(rootDir) {
  const path = require('path');
  const fs = require('fs');

  const srcDir = `${rootDir}${path.sep}src`;

  // https://gist.github.com/kethinov/6658166
  let findJsFiles = function(dir, filelist) {
    let files = fs.readdirSync(dir);
    filelist = filelist || [];
    for (let file of files) {
      if (fs.statSync(dir + path.sep + file).isDirectory())
        filelist = findJsFiles(dir + path.sep + file, filelist);
      else if (file.endsWith('.js'))
        filelist.push(dir + path.sep + file);
    }
    return filelist;
  };

  let importVendorRe = /^import .*'([^.][^']+)'/;
  let requireVendorRe = /.*\brequire\('([^.][^']+)'\).*/;

  let findDependencies = function(jsPath) {
    let dependencies = [];
    let content = fs.readFileSync(jsPath).toString();
    let lines = content.split('\n');
    for (let line of lines) {
      let match = importVendorRe.exec(line);
      if (match)
        dependencies.push(match[1]);
      match = requireVendorRe.exec(line);
      if (match)
        dependencies.push(match[1]);
    }
    return dependencies;
  };

  let vendorDependencies = [];

  for (let jsFile of findJsFiles(srcDir)) {
    let dependencies = findDependencies(jsFile);
    for (let dep of dependencies) {
      if (vendorDependencies.indexOf(dep) === -1)
        vendorDependencies.push(dep);
    }
  }

  vendorDependencies.sort();
  return vendorDependencies;
}