import { Router } from "express";
import * as userControllers from "../../controllers/users.controller";
const routers = Router();
routers
    .route("/user")
    .get(userControllers.selectAll)
    .post(userControllers.create);
routers
    .route("/user/:id")
    .get(userControllers.selectUser)
    .patch(userControllers.updateUser)
    .delete(userControllers.deleteUser);
routers.route("/authinticate").post(userControllers.authinticate);
//routers.post("/new_user", (req: Request, res: Response) => {});
export default routers;
