const { Pool } = require('pg');

// create a new PostgreSQL pool with your database configuration
const pgPool = new Pool({
    user: 'postgres',
    host: '127.0.0.1',
    database: 'youtube-bot',
    password: 'Zxc123=-',
    port: 5432,
});

export type ISqlReturn<T> = [T | undefined, any];
export async function sqlAsync<T>(callback: (client: any) => Promise<T>): Promise<ISqlReturn<T>> {
    const client = await pgPool.connect();
    let data: T | undefined = undefined;
    let error;
    try {
        data = (await callback(client)) as T;
    } catch (ex) {
        error = ex;
    } finally {
        client.release();
    }

    return [data, error];
}
