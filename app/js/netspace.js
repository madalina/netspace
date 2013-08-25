(function (window) {
	var App = window.App = Ember.Application.create();

	App.Router.map(function() {
		this.resource('resume', { path: ':resume' });
	});

	App.IndexRoute = Ember.Route.extend({
		redirect: function() {
			this.transitionTo('index');
		}
	});

	var showdown = new Showdown.converter();

	Ember.Handlebars.registerBoundHelper('markdown', function(input) {
	  return new Handlebars.SafeString(showdown.makeHtml(input));
	});

})(this);

