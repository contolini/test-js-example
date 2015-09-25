require.config({
  deps: [ "main" ],

  paths: {
    "jquery": "../bower_components/jquery/dist/jquery",
    "underscore": "../bower_components/underscore/underscore"
  },

  shim: {
    "underscore": {
      exports: "_"
    }
  }

});
