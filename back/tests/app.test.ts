import request from "supertest";
import app from "../app";

const server = request(app);

describe("./get/:word", () => {
  test("should return an array of entries", async () => {
    const res = await server.get("/get/Letter");
    expect(Array.isArray(JSON.parse(res.text))).toBe(true);
    expect(JSON.parse(res.text).length).toBeGreaterThan(0);
  });
});
