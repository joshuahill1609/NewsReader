NewReader.Routers.FeedsRouter = Backbone.Router.extend({
  routes: {
    "": "index",
    "show/:id": "show"
  },

  initialize: function($rootEl,feeds) {
    this.$rootEl = $rootEl;
    this.feeds = feeds;
  },

  index: function(){
    var that = this;

    var feedsListView = new NewReader.Views.FeedsIndexView({
      collection: that.feeds
    });

    that.$rootEl.html(feedsListView.render().$el);
  },

  show: function(id) {
    var that = this;

    var feed = that.feeds.get(id)

    var feedsShowView = new NewReader.Views.FeedsShowView({
      model: feed
    })

    that.$rootEl.html(feedsShowView.render().$el);
  }
})