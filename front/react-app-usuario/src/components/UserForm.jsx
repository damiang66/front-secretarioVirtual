import { useContext, useEffect, useState } from "react"


import { useUsers } from "../hooks/useUsers";

export const UserForm = ({ userSelected, handlerCloseForm }) => {

    const { initialUserForm, handlerAddUser, errors } = useUsers();
    
    const [userForm, setUserForm] = useState(initialUserForm);
    const [checked, setChecked] = useState(userForm.admin);
    const { id, nombre, apellido, email, telefono,contrasenia } = userForm;

    useEffect(() => {
        setUserForm({
            ...userSelected,
            contrasenia: '',
        });
    }, [userSelected]);

    const onInputChange = ({ target }) => {
        // console.log(target.value)
        const { name, value } = target;
        setUserForm({
            ...userForm,
            [name]: value,
        })
    }

   
    const onSubmit = (event) => {
        event.preventDefault();
        // if (!username || (!password && id === 0) || !email) {
        //     Swal.fire(
        //         'Error de validacion',
        //         'Debe completar los campos del formulario!',
        //         'error'
        //     );

        //     return;
        // }
        // if (!email.includes('@')) {
        //     Swal.fire(
        //         'Error de validacion email',
        //         'El email debe ser valido, incluir un @!',
        //         'error'
        //     );
        //     return;
        // }
        // console.log(userForm);

        // guardar el user form en el listado de usuarios
        console.log(userForm);
        
        handlerAddUser(userForm);
    }

    const onCloseForm = () => {
        handlerCloseForm();
        setUserForm(initialUserForm);
    }
    return (
        <form onSubmit={ onSubmit }>
            <input
                className="form-control my-3 w-75"
                placeholder="nombre"
                name="nombre"
                value={ nombre}
                onChange={onInputChange} />
            <p className="text-danger">{ errors?.nombre}</p>
            <input
                className="form-control my-3 w-75"
                placeholder="apellido"
                name="apellido"
                value={apellido}
                onChange={onInputChange} />
            <p className="text-danger">{errors?.apellido}</p>
            <input
                className="form-control my-3 w-75"
                placeholder="telefono"
                name="telefono"
                value={telefono}
                onChange={onInputChange} />
            <p className="text-danger">{errors?.telefono}</p>
            
            
            { id > 0 || <input
                className="form-control my-3 w-75"
                placeholder="contrasenia"
                type="password"
                name="contrasenia"
                value={contrasenia}
                onChange={onInputChange} />}
            <p className="text-danger">{errors?.contrasenia}</p>
            
            <input
                className="form-control my-3 w-75"
                placeholder="Email"
                name="email"
                value={email}
                onChange={onInputChange} />
            <p className="text-danger">{errors?.email}</p>

           

            <input type="hidden"
                name="id"
                value={id} />
            
            <button
                className="btn btn-primary"
                type="submit">
                {id > 0 ? 'Editar' : 'Crear'}
            </button>

            {!handlerCloseForm || <button
                className="btn btn-primary mx-2"
                type="button"
                onClick={() => onCloseForm()}>
                Cerrar
            </button>}
            
        </form>
    )
}