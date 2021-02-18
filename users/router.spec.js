const request = require("supertest");

const server = require("../api/server.js");

describe("users router", function() {
    it("should run the tests", function() {
      expect(true).toBe(true);
    });
  
    describe("GET /api/users", function() {
      it("should return 200 OK", function() {
        return request(server)
          .get("/api/users")
          .then(res => {
            expect(res.status).toBe(200);
          });
      });
  
      it("should return userrs as the router value", function() {
        return request(server)
          .get("/api/users")
          .then(res => {
            expect(Array.isArray(res.body)).toBe(true);
          });
      });
  
      it("should return JSON formatted body", function() {
        return request(server)
          .get("/api/users")
          .then(res => {
            expect(res.type).toMatch(/json/);
          });
      });
  
      it("should return an array of users (async version)", async function() {
        const res = await request(server).get("/api/users");
  
        expect(Array.isArray(res.body)).toBe(true);
      });
    });
  });

describe("users router", function() {
    it("should run the tests", function() {
      expect(true).toBe(true);
    })

    describe("Post/api/users", function() {
        it("should return 201 OK", function() {
          return request(server)
            .post("/api/users")
            .then(res => {
              expect(res.status).toBe(201);
            });
        });
    })
})

describe("users router", function() {
    it("should run the tests", function() {
      expect(true).toBe(true);
    })
    
    describe("Delete/api/users", function() {
        it("should Delete user", function() {
          return request(server)
            .delete("/api/users/:id")
            .then(res => {
              expect(res.type).toBe(/json/);
            });
        });
    })
})