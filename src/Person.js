function Person(params) {
	"use strict";
	var newFirstname;

	this.firstname = "John";
	this.lastname = "Doe";
	if (params) {
		if(params.firstname !== "") {
			this.firstname = params.firstname;
		}
		if(params.lastname !== "") {
			this.lastname = params.lastname;
		}
	}

	this.setName = function(newname) {
		this.firstname = newname.firstname;
	};

	this.getName = function() {
		return this.firstname + " " + this.lastname;
	};

};
