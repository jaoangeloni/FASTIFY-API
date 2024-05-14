import { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply } from "fastify";
import { CreateCustomerController } from "../controllers/customer/CreateCustomerController";
import { ListCustomerController } from "../controllers/customer/ListCustomerController";
import { DeleteCustomerController } from "../controllers/customer/DeleteCustomerService";

export async function costumerRoutes(fastify: FastifyInstance, options: FastifyPluginOptions) {

    fastify.get("/customer", async (request: FastifyRequest, reply: FastifyReply) => {
        return new ListCustomerController().handle(request, reply);
    })

    fastify.post("/customer", async (request: FastifyRequest, reply: FastifyReply) => {
        return new CreateCustomerController().handle(request, reply);
    })

    fastify.delete("/customer/:id", async (request: FastifyRequest, reply: FastifyReply) => {
        return new DeleteCustomerController().handle(request, reply);
    })
}