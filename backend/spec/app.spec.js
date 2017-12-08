var Request = require("request");

describe("Server", () => {
    let server;
    let firstRecipeId;
    beforeAll(() => {
        server = require("../server");
    });
    afterAll(() => {});
    describe("GET /api/users/", () => {
        let data = {};
        // add a new recipe to our database
        beforeAll((done) => {
            Request.get("http://localhost:3000/api/users", (err, response, body) => {
                data.status = response.statusCode;
                data.body = JSON.parse(body);
                done();
            })
        });
        it("status 200", () => {
            expect(data.status).toBe(200);
        });
        it("check body", () => {
            expect(data.body.message).toBe("Users");
        });
    });
    describe("POST /api/blog/add", () => {
        let data = {};
        // add a new recipe to our database
        beforeAll((done) => {
            Request({
                method: 'POST',
                uri: `http://localhost:3000/api/blog/add`,
                json: true,
                body: {
                    title: "salt",
                    text: "4",
                }
            }, (error, response, body) => {
                data.status = response.statusCode;
                data.body = body;
                done();
            }).auth(null, null, true, process.env.TEST_VALID_TOKEN);
        });
        it("status 200", () => {
            expect(data.status).toBe(200);
        });
        it("check body", () => {
            console.log(data.body);
            expect(data.body.author.username).toBe("jefwillems3");
            expect(data.body.title).toBe("salt");
            expect(data.body.text).toBe("4");
            expect(data.body._id).toBeDefined();

        });
    });
   
  
});