import prismaClient from "../../prisma";

interface FindCustomerProps {
    id: string;
}

class FindCustomerService {
    async execute({ id }: FindCustomerProps) {
        if (!id) {
            throw new Error("Solicitação inválida");
        }

        const customer = await prismaClient.customer.findUnique({
            where: {
                id: id
            }
        })

        if (!customer) {
            throw new Error("Cliente não existe");
        }

        return customer;
    }
}

export { FindCustomerService }