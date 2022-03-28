import { Router } from "express";
import * as userControllers from "../../controllers/users.controller";
const routers = Router();
routers.post("/user", userControllers.create);
routers.get("/users", userControllers.selectAll);
//routers.post("/new_user", (req: Request, res: Response) => {});
export default routers;
