import { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply } from "fastify";
import { CreateCustomerController } from "../controllers/customer/CreateCustomerController";
import { ListCustomerController } from "../controllers/customer/ListCustomerController";
import { FindCustomerController } from "../controllers/customer/FindCustomerController";
import { DeleteCustomerController } from "../controllers/customer/DeleteCustomerController";
import { UpdateCustomerController } from "../controllers/customer/UpdateCustomerController";

export async function costumerRoutes(fastify: FastifyInstance, options: FastifyPluginOptions) {

    fastify.get("/customer", async (request: FastifyRequest, reply: FastifyReply) => {
        return new ListCustomerController().handle(request, reply);
    })

    fastify.get("/customer/:id", async (request: FastifyRequest, reply: FastifyReply) => {
        return new FindCustomerController().handle(request, reply);
    })

    fastify.post("/customer", async (request: FastifyRequest, reply: FastifyReply) => {
        return new CreateCustomerController().handle(request, reply);
    })

    fastify.delete("/customer/:id", async (request: FastifyRequest, reply: FastifyReply) => {
        return new DeleteCustomerController().handle(request, reply);
    })

    fastify.put("/customer", async (request: FastifyRequest, reply: FastifyReply) => {
        return new UpdateCustomerController().handle(request, reply);
    })
}