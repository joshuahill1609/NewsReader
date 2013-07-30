NewReader.Views.FeedsIndexView = Backbone.View.extend({
  events: {
    "click #feedAdder": "addFeed"
  },

  initialize: function(){

  },

  render: function(){
    var that = this;

    var renderedContent = JST["feeds/index"]({
      feeds: that.collection
    });

    that.$el.html(renderedContent);
    return that;
  },

  // addFeed: function(){
  //   var that = this;
  //   $.post()
  //   console.log("Hi");
  // }
})