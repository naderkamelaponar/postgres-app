import User from "../types/user.type";
import db from "../database/index";
import config from "../config";
import bcrypt, { hash } from "bcrypt";
const hashPassword = (password: string) => {
    const salt = parseInt(config.salt as string, 10);
    return bcrypt.hashSync(`${password}${config.pepper}`, salt);
};
class userModel {
    // create function
    async create(u: User): Promise<User> {
        try {
            const conn = await db.connect();
            const sql =
                "INSERT INTO users_table(email,user_name,first_name,last_name, password) VALUES($1,$2,$3,$4,$5) RETURNING id,email,user_name";
            const resault = await conn.query(sql, [
                u.email,
                u.user_name,
                u.first_name,
                u.last_name,
                hashPassword(u.password),
            ]);
            conn.release();
            return resault.rows[0];
        } catch (error) {
            throw new Error(error as string);
        }
    }
    async selectAll(): Promise<User[]> {
        try {
            const conn = await db.connect();
            const sql =
                "SELECT id,email, user_name,first_name,last_name FROM users_table";
            const resault = await conn.query(sql);
            conn.release();
            return resault.rows;
        } catch (error) {
            throw new Error("No Records");
        }
    }
    async selectUser(id: string): Promise<User> {
        try {
            const conn = await db.connect();
            const sql =
                "SELECT id,email, user_name,first_name,last_name FROM users_table WHERE id=($1)";
            const resault = await conn.query(sql, [id]);
            conn.release();
            return resault.rows[0];
        } catch (error) {
            throw new Error("User Not Found");
        }
    }
    async updateUser(u: User): Promise<User> {
        try {
            const conn = await db.connect();
            const sql =
                "UPDATE users_table SET email=$1,user_name=$2,first_name=$3,last_name=$4,password=$5 WHERE id=$6 RETURNING id, email,user_name,first_name,last_name";
            const resault = await conn.query(sql, [
                u.email,
                u.user_name,
                u.first_name,
                u.last_name,
                hashPassword(u.password),
                u.id,
            ]);
            conn.release();
            return resault.rows[0];
        } catch (error) {
            throw new Error(("Couldn't Update the row:" + error) as string);
        }
    }
    async deleteUser(id: string): Promise<User> {
        try {
            const conn = await db.connect();
            const sql =
                "DELETE FROM users_table WHERE id=($1) RETURNING id,user_name,first_name,last_name";
            const resault = await conn.query(sql, [id]);
            conn.release();
            return resault.rows[0];
        } catch (error) {
            throw new Error(("Couldn't delete the row:" + error) as string);
        }
    }
}
export default userModel;
