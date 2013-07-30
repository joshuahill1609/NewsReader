window.NewReader = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function($rootEl, feedsData) {
    var feeds = new NewReader.Collections.Feeds(feedsData);
    new NewReader.Routers.FeedsRouter($rootEl,feeds);
    Backbone.history.start();
  }
};

// $(document).ready(function(){
//   NewReader.initialize();
// });
