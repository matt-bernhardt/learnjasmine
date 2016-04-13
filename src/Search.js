var Search = {

	tool: "Barton",
	refine: "Keyword",
	search: "",
	/*
	formEl: jQuery('#search-main form'),
	toolEl: jQuery('#search-main input'),
	refineEl: jQuery('.keywords'),
	advancedEl: jQuery('#search-main a.search-advanced'),
	*/
	
	construct: function() {

	},

	initialize: function(options) {
		// Need to add an init object 
		var defaults = {
			tool: "Barton",
			refine: "Keyword",
			search: ""
		};
		this.config = options || defaults;
		if (options) {
			this.tool = options.tool;
			this.refine = options.refine;
			this.search = options.search;
		}
		// this.config.tool = "Barton";
		// this.config.refine = "Keyword";
		// this.config.search = "";
		return this;
	},

	loadFormState: function() {
		var formState = {};
		formState.status = 'unsupported';
		formState.tool = 'bartonplus';
		formState.refine = '';
		if (Modernizr.localstorage) {
			if (localStorage.getItem('tool') !== null) {
				formState.status = 'return visit';
				formState.tool = localStorage.getItem('tool');
				formState.refine = localStorage.getItem('refine');
			} else {
				formState.status = 'first visit';
			}
		}
		// Need to add a resource lookup
		return formState;
	},

	resetSearch: function() {

	},

	saveFormState: function() {
		if (Modernizr.localstorage) {
			localStorage.setItem('tool',this.tool);
			localStorage.setItem('refine',this.refine);
		} else {
			console.log('LocalStorage not supported - could not save form state');
		}
	},

	setDefaultRefine: function(newTool) {
		if(newTool === 'Barton') {
			this.refine = 'Keyword';
		} else if(newTool === 'Vera') {
			this.refine = 'Partial words';
		} else if(newTool === 'BartonPlus') {
			this.refine = 'Keyword';
		} else if(newTool === 'WorldCat') {
			this.refine = 'Keyword';
		} else {
			this.refine = '';
		}
		return this;
	},

	setRefine: function(newRefine) {
		this.refine = newRefine;
		return this;
	},

	setTool: function(newTool) {
		this.tool = newTool;
		this.setDefaultRefine(newTool);
		return this;
	},

	Search: function(bar) {
		this.bar = bar;
		return this;
	}

};
