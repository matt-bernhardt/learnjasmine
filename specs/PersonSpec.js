describe("Person suite", function() {
	it("has a simple test", function() {
		expect(true).toBe(true);
	});

	it("should have a first name", function() {
		var testPerson = new Person();
		expect(testPerson.firstname).toEqual("John");
	});

	it("should have a last name", function() {
		var testPerson = new Person();
		expect(testPerson.lastname).toEqual("Doe");
	});

	it("should allow name overrides", function() {
		custom = {firstname:"Jim",lastname:"Parsons"};
		var testPerson = new Person(custom);
		expect(testPerson.firstname).toBe("Jim");
		expect(testPerson.lastname).toBe("Parsons");
	});

	it("should allow renaming", function() {
		var testPerson = new Person();
		expect(testPerson.firstname).toBe("John");

		testPerson.firstname = "Jim";
		expect(testPerson.firstname).toBe("Jim");

		custom = {firstname:"Carole",lastname:"Bernhardt"};
		testPerson.setName(custom);
		expect(testPerson.firstname).toBe("Carole")

	});

	it("should have a getter for name", function() {
		var testPerson = new Person();
		expect(testPerson.firstname).toBe("John");

		expect(testPerson.getName()).toBe("John Doe");

	});
});
