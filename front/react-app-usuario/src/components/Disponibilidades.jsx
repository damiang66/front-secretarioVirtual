import React, { useState } from 'react';
import { Button } from 'primereact/button';
import DisponibilidadForm from './disponibilidadForm';
import { crearAgenda } from '../services/adminService';
import Swal from 'sweetalert2';


const Disponibilidades = () => {
    const [disponibilidades, setDisponibilidades] = useState([]);

    const addDisponibilidad = (disponibilidad) => {
        setDisponibilidades([...disponibilidades, disponibilidad]);
    };

    const removeDisponibilidad = (index) => {
        const nuevasDisponibilidades = disponibilidades.filter((_, i) => i !== index);
        setDisponibilidades(nuevasDisponibilidades);
    };

    const enviarDisponibilidades = () => {
        // Aquí deberías implementar la lógica para enviar las disponibilidades al backend.
        console.log('Enviando disponibilidades:', disponibilidades);
        try {
            crearAgenda(disponibilidades);
            Swal.fire('Creacion', 'La Agenda con las disponibilidades fue creada con exito', 'success');
        } catch (error) {
            Swal.fire('Error', 'ocurrio algun error con el server ', 'error');

        }
    };

    return (
        <div>
            <DisponibilidadForm onAddDisponibilidad={addDisponibilidad} />
            <table className="table table-hover table-striped">
                <thead>
                    <tr>
                        <th>Dia de la Semana</th>
                        <th>Hora de Inicio Mañana</th>
                        <th>Hora Fin Mañana</th>
                        <th>Hora de Inicio Tarde</th>
                        <th>Hora Fin Tarde</th>
                        <th>Hora de Inicio Noche</th>
                        <th>Hora Fin Noche</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {disponibilidades.map((disponibilidad, index) => (
                        <tr key={index}>
                            <td>{disponibilidad.diaSemana}</td>
                            <td>{disponibilidad.horaInicio ? new Date(disponibilidad.horaInicio).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : ''}</td>
                            <td>{disponibilidad.horaFin ? new Date(disponibilidad.horaFin).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : ''}</td>
                            <td>{disponibilidad.horaInicioTarde ? new Date(disponibilidad.horaInicioTarde).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : ''}</td>
                            <td>{disponibilidad.horaFinTarde ? new Date(disponibilidad.horaFinTarde).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : ''}</td>
                            <td>{disponibilidad.horaInicioNoche ? new Date(disponibilidad.horaInicioNoche).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : ''}</td>
                            <td>{disponibilidad.horaFinNoche ? new Date(disponibilidad.horaFinNoche).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : ''}</td>
                            <td>
                                <Button
                                    label="Eliminar"
                                    icon="pi pi-times"
                                    className="p-button-danger"
                                    onClick={() => removeDisponibilidad(index)}
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Button label="Enviar Disponibilidades" onClick={enviarDisponibilidades} />
        </div>
    );
};

export default Disponibilidades;
