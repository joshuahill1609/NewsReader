NewReader.Models.Feed = Backbone.Model.extend({
  urlRoot: "/feeds",

  initialize: function(attributes){
    this.attributes = this.parse(attributes);
  },

  parse: function(response){
    var entriesCollection = new NewReader.Collections.Entries();

    if(response.entries){
      response.entries.forEach(function(entry){
        entriesCollection.add(entry);
      });
    }

    response.entries = entriesCollection;
    return response;
  }
});
