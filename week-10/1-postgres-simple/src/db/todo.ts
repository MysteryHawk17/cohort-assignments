import { client } from "..";
import { QueryResult } from "pg";

interface TODO {
    title: string;
    description: string;
    done: boolean;
    id: number;
    user_id: number;
}

export async function createTodo(userId: number, title: string, description: string): Promise<TODO> {
    try {
        const queryText = `
          INSERT INTO todos (user_id, title, description)
          VALUES ($1, $2, $3)
          RETURNING *`;
        const values = [userId, title, description];
        const result = await client.query(queryText, values);

        if (result && result.rows && result.rows.length > 0) {
            //  const todoId = result.rows[0].id;
            return result.rows[0] as TODO;
        } else {
            console.error('Error inserting todo: No rows returned');
            throw new Error('No rows returned');
        }
    } catch (err) {
        console.error('Error executing query:', err);
        throw err;
    }
}

export async function updateTodo(todoId: number): Promise<TODO > {
    try {
        const result: QueryResult<any> = await client.query(`UPDATE todos SET done=true WHERE id=$1 RETURNING *`, [todoId]);

        // if (!updatedTodo.rows || updatedTodo.rows.length === 0) {
        //     throw new Error('Failed to update todo');
        // }

        // return updatedTodo.rows[0];
        if (result && result.rows && result.rows.length > 0) {
            //  const todoId = result.rows[0].id;
            return result.rows[0] as TODO;
        } else {
            console.error('Error inserting todo: No rows returned');
            throw new Error('No rows returned');
        }
    } catch (error) {
        console.error("Error updating todo", error);
        throw error;
    }
}

export async function getTodos(userId: number): Promise<TODO[] > {
    try {
        const queryText = `SELECT title, description, done, id, user_id FROM todos WHERE user_id=$1`;
        const result = await client.query(queryText, [userId]);

        if (result && result.rows && result.rows.length > 0) {
            //  const todoId = result.rows[0].id;
            return result.rows as TODO[];
        } else {
            console.error('Error inserting todo: No rows returned');
            throw new Error('No rows returned');
        }
    } catch (error) {
        console.error("Error getting todos", error);
        throw error;
    }
}

// Tests remain the same.
