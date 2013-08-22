App = Ember.Application.create({});

App.Router.map(function() {
	this.resource("resume");
});
var showdown = new Showdown.converter();

Ember.Handlebars.registerBoundHelper('markdown', function(input) {
  return new Handlebars.SafeString(showdown.makeHtml(input));
});
