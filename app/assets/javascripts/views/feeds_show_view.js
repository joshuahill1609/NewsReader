NewReader.Views.FeedsShowView = Backbone.View.extend({
  events: {
    "click #refresh": "refresh"
  },

  initialize: function(id){
    this.id = id;
  },

  render: function(){
    var that = this;

    var renderedContent = JST["feeds/show"]({
      feed: that.model,
      view: that
    });
    that.$el.html(renderedContent);
    return that;

  },

  refresh: function(){
    var that = this;
    that.model.fetch({success: function(){
      // var attributes = that.model.attributes;
      // that.model.attributes = that.model.parse(attributes);
      that.render();
    }
  });
  }
});