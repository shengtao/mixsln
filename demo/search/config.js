app.config.enableMessageLog = false;
app.config.enableNavbar = false;
app.config.enableToolbar = false;
app.config.enableScroll = false;
app.config.enableTransition = true;
app.config.templateEngine = {
	load: function(url, callback) {
		$.get(url, callback);
	},
	compile : function(text) {
		return Mustache.compile(text);
	},

	render : function(compiled, data) {
		return compiled(data);
	}
}

