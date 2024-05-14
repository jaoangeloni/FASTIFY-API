import { FastifyRequest, FastifyReply } from "fastify";
import { FindCustomerService } from "../../services/customer/FindCustomerService";

class FindCustomerController {
    async handle(request: FastifyRequest, reply: FastifyReply) {
        const { id } = request.params as { id: string };

        const customerService = new FindCustomerService();
        const customer = await customerService.execute({ id });

        reply.send(customer);
    }
}

export { FindCustomerController };