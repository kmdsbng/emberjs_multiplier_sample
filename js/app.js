
var App = Ember.Application.create();


App.ApplicationView = Ember.View.extend({
  lhs: 6,
  rhs: 7,
  answer: function () {
    return this.get('lhs') * this.get('rhs');
  }.property('lhs', 'rhs')
});

App.initialize();

