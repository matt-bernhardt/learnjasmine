describe("Search suite", function() {

    var test = {};

    beforeEach(function() {
        var options = {
            tool: 'Vera',
            refine: '',
            search: ''
        };
        var test = Search.initialize(options);
    });

    it("has a config property", function() {
        expect(Search.config).toBeDefined();
    });

    it("has a config.tool property", function() {
        var search = new Search.initialize();
        expect(search.config.tool).toBeDefined();
    });

    it("has a config.refine property", function() {
        var search = new Search.initialize();
        expect(search.config.refine).toBeDefined();
    });

    it("has a config.search property", function() {
        var search = new Search.initialize();
        expect(search.config.search).toBeDefined();
    });

    it("has a tool property", function() {
        expect(Search.tool).toBeDefined();
    });

    it("has a refine property", function() {
        expect(Search.refine).toBeDefined();
    });

    it("has a search property", function() {
        expect(Search.search).toBeDefined();
    });

    it("allows the search tool to be set", function() {
        expect(Search.setTool('Vera').tool).toEqual('Vera');
        expect(Search.setTool('BartonPlus').tool).toEqual('BartonPlus');
    });

    it("allows the search refine to be set", function() {
        expect(Search.setRefine('Keyword').refine).toEqual('Keyword');
        expect(Search.setRefine('Author').refine).toEqual('Author');
    });

    it("expects setting the tool to alter the default refine", function() {
        expect(Search.setTool('Vera').refine).toEqual('Partial words');
        expect(Search.setTool('Barton').refine).toEqual('Keyword');
    });
});
