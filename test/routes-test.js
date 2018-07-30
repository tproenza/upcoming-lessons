let chai = require("chai");
let chaiHttp = require("chai-http");
let server = require("../server/server");
let should = chai.should();

chai.use(chaiHttp);

describe("Lessons", () => {
  describe("/GET lessons", () => {
    it("It should GET the lessons with sucess", done => {
      chai
        .request(server)
        .get("/api/lessons")
        .end((err, res) => {
          res.should.have.status(200);
          done();
        });
    });

    it("It should return lessons as an Object", done => {
      chai
        .request(server)
        .get("/api/lessons")
        .end((err, res) => {
          res.body.should.be.a("object");
          done();
        });
    });

    it("It should have keys by YYYY-MM-DD date format", () => {
      chai
        .request(server)
        .get("/api/lessons")
        .end((err, res) => {
          res.body.should.have.any.keys("2016-01-01");
        });
    });
  });
});

describe("Attempt to send file request", () => {
  it("It should 404 for requests with file extensions", done => {
    chai
      .request(server)
      .get("/file.js")
      .end((err, res) => {
        res.should.have.status(404);
        done();
      });
  });
});
