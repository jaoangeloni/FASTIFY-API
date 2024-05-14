import Fastify from 'fastify';
import cors from '@fastify/cors';

import { costumerRoutes } from './routes/customerRoutes';

const app = Fastify({ logger: true });

const start = async () => {

    await app.register(costumerRoutes);
    await app.register(cors);

    try {
        await app.listen({ port: 3000 });
    } catch (error) {
        process.exit(1);
    }
}

start();