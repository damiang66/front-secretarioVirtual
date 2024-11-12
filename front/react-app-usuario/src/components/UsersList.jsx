import { UserRow } from "./UserRow";
import { IconField } from 'primereact/iconfield';
import { InputIcon } from 'primereact/inputicon';
import { InputText } from 'primereact/inputtext';
import { useUsers } from "../hooks/useUsers";
import { useAuth } from "../auth/hooks/useAuth";
import { useEffect, useState } from "react";

export const UsersList = ({ clientes }) => {
    const { users } = useUsers();
    const { login } = useAuth();
    const [busqueda, setBusqueda] = useState('');
    const [clientesFiltrados, setClientesFiltrados] = useState(clientes);

    const buscarPorApellido = (event) => {
        setBusqueda(event.target.value);
    };

    const handlerBusqueda = () => {
        const filtrados = clientes.filter(cliente => 
            cliente.apellido.toLowerCase().includes(busqueda.toLowerCase())
        );
        setClientesFiltrados(filtrados);
    };

    useEffect(() => {
        handlerBusqueda();
    }, [busqueda, clientes]);

    return (
        <>
            <IconField>
                <InputIcon className="pi pi-spin pi-spinner"></InputIcon>
                <InputText value={busqueda} onChange={buscarPorApellido} placeholder="buscar por apellido" />
            </IconField>
            <table className="table table-hover table-striped">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>nombre</th>
                        <th>apellido</th>
                        <th>email</th>
                        <th>fecha creacion</th>  
                        {/*!login.isAdmin || <>
                            <th>update</th>
                            <th>update route</th>
                            <th>remove</th>
                        </>*/}
                    </tr>
                </thead>
                <tbody>
                    {
                        clientesFiltrados.map(({ id, nombre, apellido, email, fechaCreacion }) => (
                            <UserRow
                                key={id}
                                id={id}
                                nombre={nombre}
                                apellido={apellido}
                                email={email}
                                fechaCreacion={fechaCreacion}
                            />
                        ))
                    }
                </tbody>
            </table>
        </>
    );
};
