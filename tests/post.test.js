
const mongoose = require("mongoose");
const request = require("supertest");
const app = require("../app");

require("dotenv").config();
/* Connecting to the database before each test. */
beforeEach(async () => {
    await mongoose.connect(process.env.MONGODB_URI);
  });
  
  /* Dropping the database and closing connection after each test. */
  afterEach(async () => {
    // await mongoose.connection.dropDatabase();
    await mongoose.connection.close();
  });

describe("POST /api/products", () => {
    it("should create a product", async () => {
      const res = await request(app).post("/api/products").send({
        name: "Product 1",
        price: 99.99,
        description: "Description 1",
      });
      expect(res.statusCode).toBe(201);
      expect(res.body.name).toBe("Product 1");
    });
  });