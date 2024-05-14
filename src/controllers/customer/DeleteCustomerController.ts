import { FastifyRequest, FastifyReply } from "fastify";
import { DeleteCustomerService } from "../../services/customer/DeleteCustomerService";

class DeleteCustomerController {
    async handle(request: FastifyRequest, reply: FastifyReply) {
        const { id } = request.params as { id: string };

        const customerService = new DeleteCustomerService();
        const customer = await customerService.execute({ id });

        reply.send(customer);
    }
}

export { DeleteCustomerController };