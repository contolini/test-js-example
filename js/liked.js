define(["jquery"], function($) {

  var Liked = function(selector) {
    this._el = $(selector);
  };

  Liked.prototype.getEl = function() {
    return this._el[0];
  };

  Liked.prototype.append = function(name) {
    this._el.find( '.no-results' ).remove();
    $( '<li>', { text: name } ).appendTo( this._el );
  };

  return Liked;
});
