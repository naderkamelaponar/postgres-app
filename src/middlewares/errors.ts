import { Response, Request, NextFunction } from "express";
import Error from "../interfaces/error.interface";
const glopalError = (
    error: Error,
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const status = error.status || 500;
    const message = error.message || "Sorry !";
    res.status(status).send(message);
    next;
};
export default glopalError;
