define(["jquery"], function($) {

  var People = function() {};

  People.prototype.search = function(query) {

    return $.ajax( '/data/search.json', {
      data : {
        q: query
      },
      dataType : 'json'
    });
  };

  return People;

});
