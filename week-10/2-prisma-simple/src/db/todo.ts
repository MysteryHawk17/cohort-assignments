import { PrismaClient, Todo } from '@prisma/client';

const prisma: PrismaClient = new PrismaClient();

/*
 * Function should insert a new todo for this user
 * Should return a todo object
 * {
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }
 */
export async function createTodo(userId: number, title: string, description: string): Promise<Todo> {
    try {
        const createdTodo: Todo = await prisma.todo.create({
            data: {
                userId,
                title,
                description,
                done: false // By default, todo is not done
            }
        });
        return createdTodo;
    } catch (error:any) {
        throw new Error(`Failed to create todo: ${error.message}`);
    }
}

/*
 * mark done as true for this specific todo.
 * Should return a todo object
 * {
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }
 */
export async function updateTodo(todoId: number): Promise<Todo> {
    try {
        const updatedTodo: Todo | null = await prisma.todo.update({
            where: {
                id: todoId
            },
            data: {
                done: true
            }
        });
        if (!updatedTodo) {
            throw new Error("Todo not found");
        }
        return updatedTodo;
    } catch (error:any) {
        throw new Error(`Failed to update todo: ${error.message}`);
    }
}

/*
 *  Get all the todos of a given user
 * Should return an array of todos
 * [{
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }]
 */
export async function getTodos(userId: number): Promise<Todo[]> {
    try {
        const todos: Todo[] = await prisma.todo.findMany({
            where: {
                userId: userId
            }
        });
        return todos;
    } catch (error:any) {
        throw new Error(`Failed to get todos: ${error.message}`);
    }
}
