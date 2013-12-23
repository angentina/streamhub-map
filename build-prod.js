({
  mainConfigFile: './requirejs.conf.js',
  cjsTranslate: true,
  paths: {
    jquery: 'lib/jquery/jquery.min',
    almond: 'lib/almond/almond'
  },
  baseUrl: '.',
  name: "streamhub-map",
  exclude: ['streamhub-sdk', 'almond'],
  stubModules: ['text', 'hgn', 'json'],
  out: "./dist/streamhub-map.min.js",
  namespace: 'Livefyre',
  pragmasOnSave: {
    excludeHogan: true
  },
  optimize: "uglify2",
  uglify2: {
    compress: {
      unsafe: true
    },
    mangle: true
  },
  onBuildRead: function(moduleName, path, contents) {
    if (moduleName == "jquery") {
      contents = "define([], function(require, exports, module) {" + contents + "});";
    }
    return contents;
  }
})
