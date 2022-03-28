import supertest from "supertest";
import app from "../server";
const request = supertest(app);
describe("check the landing page", () => {
    it("response.status toBe 200", async () => {
        const response = await request.get("/");
        expect(response.status).toBe(200);
    });
});
