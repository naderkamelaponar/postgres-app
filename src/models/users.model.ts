import User from "../types/user.type";
import db from "../database/index";
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
                u.password,
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
                "SELECT id,email, user_name,first_name,last_name FROM users_table where id=($1)";
            const resault = await conn.query(sql, [id]);
            conn.release();
            return resault.rows[0];
        } catch (error) {
            throw new Error("User Not Found");
        }
    }
}
export default userModel;
