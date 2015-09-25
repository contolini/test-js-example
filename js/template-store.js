define(['jquery', 'underscore'], function($, _) {

  function TemplateStore() {
    this.tmplCache = {};
  }

  TemplateStore.prototype.fetch = function(name) {
    if ( !this.tmplCache[ name ] ) {
      this.tmplCache[ name ] = $.get( '/templates/' + name )
        .then(function(text) {
          return _.template(text);
        });
    }
    return this.tmplCache[ name ];
  };

  return TemplateStore;
});
