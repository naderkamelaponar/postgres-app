import { Request, Response } from "express";
import userModel from "../models/users.model";
const users = new userModel();
export const create = async (req: Request, res: Response) => {
    const newUser = await users.create(req.body);
    res.json({
        status: "Success",
        message: "New User has been created",
        data: { ...newUser },
    });
};
export const selectAll = async (_req: Request, res: Response) => {
    const usersList = await users.selectAll();
    res.json({
        users: { ...usersList },
    });
};
