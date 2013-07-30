NewReader.Views.FeedsIndexView = Backbone.View.extend({
  initialize: function(){

  },

  render: function(){
    var that = this;

    var renderedContent = JST["feeds/index"]({
      feeds: that.collection
    });

    that.$el.html(renderedContent);
    return that;
  }
})