import prismaClient from "../../prisma";


interface UpdateCustomerProps {
    name: string;
    email: string;
}

class UpdateCustomerService {
    async execute({ name, email }: UpdateCustomerProps) {

        if (!name || !email) {
            throw new Error("Preencha todos os campos");
        }

        const customer = await prismaClient.customer.updateMany({
            data: {
                name,
                email,
                status: true
            }
        })

        return customer;
    }
}


export { UpdateCustomerService }