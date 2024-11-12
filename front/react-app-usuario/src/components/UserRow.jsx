
import { NavLink } from "react-router-dom"


import { useUsers } from "../hooks/useUsers";
import { useAuth } from "../auth/hooks/useAuth";

export const UserRow = ({ id, nombre,apellido, email, fechaCreacion }) => {
    const { handlerUserSelectedForm, handlerRemoveUser } = useUsers();
    const { login } = useAuth();;
    return (
        <tr>
            <td>{id}</td>
            <td>{nombre}</td>
            <td>{apellido}</td>
            <td>{email}</td>
            <td>{fechaCreacion}</td>

            {!login.isAdmin ||
                <>
                    <td>
                        <button
                            type="button"
                            className="btn btn-secondary btn-sm"
                            onClick={() => handlerUserSelectedForm({
                                id,
                                username,
                                email,
                                admin
                            })}
                        >
                            update
                        </button>
                    </td>
                    <td>
                        <NavLink className={'btn btn-secondary btn-sm'}
                            to={'/users/edit/' + id} >
                            update route
                        </NavLink>
                    </td>
                    <td>
                        <button
                            type="button"
                            className="btn btn-danger btn-sm"
                            onClick={() => handlerRemoveUser(id)}
                        >
                            remove
                        </button>
                    </td>
                </>
            }
        </tr>
    )
}