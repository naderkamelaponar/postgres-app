import { Router } from "express";
import userRoute from "./api/users.routes";
const routes = Router();
routes.use(userRoute);
export default routes;
