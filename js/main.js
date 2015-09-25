require([
    'template-store',
    'search-form',
    'people',
    'liked',
    'underscore',
    'jquery'
  ],
  function(TemplateStore, SearchForm, People, Liked, _, $) {

  var tStore = new TemplateStore();
  var peopleTmplPromise = tStore.fetch('people-detailed.tmpl');

  $(function() {

    var searchForm = new SearchForm('#searchForm');
    var resultsList = $( '#results' );
    var liked = new Liked( '#liked' );
    var people = new People();
    var pending = false;

    searchForm.onSearch = function(query) {

      if (pending) {
        return;
      }

      pending = true;
      people.search(query)
        .then(function( data ) {
          return peopleTmplPromise.then(function(tmpl) {
            resultsList.html( tmpl({ people : data.results }) );
          });
        }).always(function() {
          pending = false;
        });

      $('<li>', {
        'class' : 'searching',
        html : 'Searching &hellip;'
      }).appendTo( resultsList.empty() );
    };

    resultsList.on( 'click', '.like', function(e) {
      e.preventDefault();
      var name = $( this ).closest( 'li' ).find( 'h2' ).text();
      liked.append(name);
    });

  });

});
