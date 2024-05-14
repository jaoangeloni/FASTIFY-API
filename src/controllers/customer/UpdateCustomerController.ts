import { FastifyRequest, FastifyReply } from "fastify";
import { UpdateCustomerService } from "../../services/customer/UpdateCustomerService";

class UpdateCustomerController {
    async handle(request: FastifyRequest, reply: FastifyReply) {
        const { name, email } = request.body as { name: string, email: string }

        const customerService = new UpdateCustomerService;
        const customer = await customerService.execute({ name, email });

        reply.send(customer);
    }
}



export { UpdateCustomerController };