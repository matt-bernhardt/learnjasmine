describe("A suite", function() {
    it("contains spec with an expectation", function() {
        expect(true).toBe(true);
    });

    it("should fail", function() {
        expect(true).toBe(false);
    });
});