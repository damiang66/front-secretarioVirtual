import { useContext, useEffect, useState } from "react";
import { UserModalForm } from "../components/UserModalForm";
import { UsersList } from "../components/UsersList";

import { useUsers } from "../hooks/useUsers";
import { useAuth } from "../auth/hooks/useAuth";
import { clienteFindAll } from "../services/adminService";

export const UsersPage = () => {

    const {
        users,
        visibleForm,
        handlerOpenForm,
        getUsers,
    } = useUsers();

const[cliente,setCliente]=useState([])
    const { login } = useAuth();;

    useEffect(() => {
       findAllClientes()
    }, []);
    const findAllClientes = async()=>{
        const respueta = await clienteFindAll();
        console.log(respueta);
        
        setCliente(respueta.data);
    }
    return (
        <>

            {!visibleForm ||
                <UserModalForm />}
            <div className="container my-4">
                <h2>Secretario virtual</h2>
                <div className="row">
                    <div className="col">
                        {/*(visibleForm || !login.isAdmin) || <button
                            className="btn btn-primary my-2"
                            onClick={handlerOpenForm}>
                            Nuevo Usuario
                        </button>*/}
<button
                            className="btn btn-primary my-2"
                            onClick={handlerOpenForm}>
                            Nuevo CLiente
                        </button>
                        {
                            cliente.length === 0
                                ? <div className="alert alert-warning">No hay clientes en el sistema!</div>
                                : <UsersList
                                clientes={cliente} />
                        }
                    </div>
                </div>
            </div>
        </>
    );
}