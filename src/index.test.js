const app = require("express")();
const supertest = require("supertest");
const request = supertest(app);


app.get("/", function (req, res) {
    res.status(200).send("practise with kubernetes");
});


describe("GET /", function () {
    it("should return 200 OK", function (done) {
        request
            .get("/")
            .expect(200)
            .end(function (err, res) {
                if (err) return done(err);
                done();
            });
    });
    it("should return 200 OK1", function (done) {
        request
            .get("/")
            .expect(400)
            .end(function (err, res) {
                if (err) return done(err);
                done();
            });
    });
});
