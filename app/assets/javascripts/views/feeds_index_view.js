NewReader.Views.FeedsIndexView = Backbone.View.extend({
  events: {
    "click #feedAdder": "addFeed"
  },

  initialize: function(){
    this.listenTo(this.collection,"add", this.render)
  },

  render: function(){
    var that = this;

    var renderedContent = JST["feeds/index"]({
      feeds: that.collection
    });

    that.$el.html(renderedContent);
    return that;
  },

  addFeed: function(e){
    e.preventDefault();
    var that = this;
    $.post("http://localhost:3000/feeds",$("#addForm").serialize()).done(function(data){
      var feed = new NewReader.Models.Feed(data);
      feed.fetch({success:function(){
        that.collection.add(feed);
      }})
    });
  }
})