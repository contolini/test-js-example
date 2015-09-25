define([
  "jquery",
  "underscore"
  ],
  function($, _) {

    function SearchForm(selector) {
      this._el = $(selector);
      this._el.on('submit', _.bind(this.handleSubmit, this));
    }

    SearchForm.prototype.handleSubmit = function(event) {
      var query;
      event.preventDefault();

      query = $.trim(this._el.find('input[name="q"]').val());

      if (!query) {
        return;
      }

      if (typeof this.onSearch === 'function') {
        this.onSearch(query);
      }
    };

    return SearchForm;
});
