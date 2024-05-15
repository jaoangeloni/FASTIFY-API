import { useEffect, useState, useRef, FormEvent } from 'react';
import { FiTrash } from 'react-icons/fi';
import { api } from './api/api';

interface CustomerProps {
  id: string,
  name: string,
  email: string,
  status: boolean,
  created_at: string
}

export default function App() {

  const [customer, setCustomer] = useState<CustomerProps[]>([])

  const nameRef = useRef<HTMLInputElement | null>(null);
  const emailRef = useRef<HTMLInputElement | null>(null);


  useEffect(() => {
    loadCustomers();
  }, [])

  async function loadCustomers() {
    const response = await api.get("/customer");
    setCustomer(response.data);
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    if (!nameRef.current?.value || !emailRef.current?.value) return;

    const response = await api.post("/customer", {
      name: nameRef.current?.value,
      email: emailRef.current?.value
    });

    setCustomer(allCustomers => [...allCustomers, response.data]);

    nameRef.current.value = "";
    emailRef.current.value = "";
  }

  async function handleDelete(id: string) {
    try {
      await api.delete("/customer/" + id)

      const allCustomers = customer.filter((customer) => customer.id !== id);

      setCustomer(allCustomers);

    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div className="w-full min-h-screen flex justify-center">
      <main className="p-5 w-full md:max-w-2xl">
        <h1 className="text-4xl font-thin text-green-500 ">Clientes</h1>

        <form className="flex flex-col p-6 gap-2" onSubmit={handleSubmit}>
          <label>Nome</label>
          <input
            type="text"
            placeholder="Digite seu nome"
            className="w-full rounded-md p-2 outline-none bg-gray-200"
            ref={nameRef}
          />
          <label>Email</label>
          <input
            type="text"
            placeholder="Digite seu email"
            className="w-full rounded-md p-2 outline-none bg-gray-200"
            ref={emailRef}
          />
          <input
            type="submit"
            value="Cadastrar"
            className="w-full rounded-md p-2 outline-none bg-green-500 text-white font-bold cursor-pointer hover:bg-green-600"
          />
        </form>

        <section className="flex flex-col w-full p-6 gap-2">

          {customer.map((customer) => (
            <div
              key={customer.id}
              className="bg-gray-200 w-full rounded-md p-2 relative hover:scale-105 duration-200 cursor-pointer"
            >
              <p><span className="font-bold">ID </span>{customer.id}</p>
              <p><span className="font-bold">NOME </span>{customer.name}</p>
              <p><span className="font-bold">EMAIL </span>{customer.email}</p>
              <p><span className="font-bold">STATUS </span>{customer.status ? "Ativo" : "Inativo"}</p>

              <button
                className='bg-red-500 w-6 h-6 flex items-center justify-center rounded-full absolute right-2 top-2'
                onClick={() => handleDelete(customer.id)}
              >
                <FiTrash size={18} color='#fff' />
              </button>

            </div>
          ))}

        </section>

      </main>


    </div>
  )
}