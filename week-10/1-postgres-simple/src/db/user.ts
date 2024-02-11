import { client } from "..";
import { QueryResult } from "pg";

interface User {
    id: number;
    username: string;
    password: string;
    name: string;
}

export async function createUser(username: string, password: string, name: string): Promise<User | null> {
    try {
        const result = await client.query(
            `INSERT INTO users (username, password, name) VALUES ($1, $2, $3) RETURNING *`,
            [username, password, name]
        );

        if (!result.rows || result.rows.length === 0) {
            throw new Error('Failed to create user');
        }

        return result.rows[0] as User;
    } catch (error) {
        console.error("Error creating user:", error);
        return null;
    }
}

export async function getUser(userId: number): Promise<User | null> {
    try {
        const queryResult: QueryResult<User> = await client.query(
            `SELECT id, username, password, name FROM users WHERE id = $1`,
            [userId]
        );

        if (!queryResult.rows || queryResult.rows.length === 0) {
            return null;
        }

        const userData = queryResult.rows[0];

        const user: User = {
            id: userData.id,
            username: userData.username,
            password: userData.password,
            name: userData.name
        };

        return user;
    } catch (error) {
        console.error("Error fetching user:", error);
        return null;
    }
}
