import { NextFunction, Request, Response } from "express";
import userModel from "../models/users.model";
const users = new userModel();
export const create = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const newUser = await users.create(req.body);
        res.json({
            status: "Success",
            message: "New User has been created",
            data: { ...newUser },
        });
    } catch (error) {
        next(error);
    }
};
export const selectAll = async (
    _req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const usersList = await users.selectAll();
        res.json({
            users: { ...usersList },
        });
    } catch (error) {
        next(error);
    }
};
export const selectUser = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const usersList = await users.selectUser(req.params.id as string);
        res.json({
            status: "Success",
            message: "Retrived a User",
            data: { ...usersList },
        });
    } catch (error) {
        next(error);
    }
};
export const updateUser = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const usersList = await users.updateUser(req.body);
        res.json({
            status: "Success",
            message: "Updated User",
            data: { ...usersList },
        });
    } catch (error) {
        next(error);
    }
};
export const deleteUser = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const usersList = await users.deleteUser(req.params.id as string);
        res.json({
            status: "Success",
            message: "Deleted User",
            data: { ...usersList },
        });
    } catch (error) {
        next(error);
    }
};
