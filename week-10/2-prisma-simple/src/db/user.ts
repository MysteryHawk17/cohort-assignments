import { PrismaClient, User } from '@prisma/client';

const prisma: PrismaClient = new PrismaClient();

/*
 * Should insert into the users table
 * Should return the User object
 * {
 *   username: string,
 *   password: string,
 *   name: string
 * }
 */
export async function createUser(username: string, password: string, name: string): Promise<User> {
    try {
        const findUser: User | null = await prisma.user.findFirst({
            where: {
                username: username
            }
        });

        if (findUser) {
            throw new Error("User with the provided username already exists");
        } else {
            const createUser: User = await prisma.user.create({
                data: {
                    username,
                    password,
                    name
                }
            });
            return createUser;
        }
    } catch (error:any) {
        throw new Error(`Failed to create user: ${error.message}`);
    }
}

/*
 * Should return the User object
 * {
 *   username: string,
 *   password: string,
 *   name: string
 * }
 */
export async function getUser(userId: number): Promise<User | null> {
    try {
        const findUser: User | null = await prisma.user.findUnique({
            where: {
                id: userId
            }
        });

        if (findUser) {
            return findUser;
        } else {
            throw new Error("User not found");
        }
    } catch (error:any) {
        throw new Error(`Failed to get user: ${error.message}`);
    }
}
