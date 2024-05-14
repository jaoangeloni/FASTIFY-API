import prismaClient from "../../prisma";

interface DeleteCustomerProps {
    id: string;
}

class DeleteCustomerService {
    async execute({ id }: DeleteCustomerProps) {
        const customers = await prismaClient.customer.findMany();
        if (!id) {
            throw new Error("Solicitação inválida");
        }

        const findCustomer = await prismaClient.customer.findFirst({
            where: {
                id: id
            }
        })

        if (!findCustomer) {
            throw new Error("Cliente não existe");
        }

        await prismaClient.customer.delete({
            where: {
                id: findCustomer.id
            }
        })

        return { msg: "Deletado com sucesso!" };
    }
}

export { DeleteCustomerService }