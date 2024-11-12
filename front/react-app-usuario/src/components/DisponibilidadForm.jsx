import React, { useState } from 'react';
import { Dropdown } from 'primereact/dropdown';
import { Button } from 'primereact/button';
import { Calendar } from 'primereact/calendar';
import 'primereact/resources/themes/saga-blue/theme.css'; // Ajusta según el tema que estés usando
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import './DisponibilidadForm.css'; // Archivo CSS personalizado

const diasDeSemana = [
    { label: 'Lunes', value: 'LUNES' },
    { label: 'Martes', value: 'MARTES' },
    { label: 'Miércoles', value: 'MIERCOLES' },
    { label: 'Jueves', value: 'JUEVES' },
    { label: 'Viernes', value: 'VIERNES' },
    { label: 'Sábado', value: 'SABADO' },
    { label: 'Domingo', value: 'DOMINGO' }
];

const DisponibilidadForm = ({ onAddDisponibilidad }) => {
    const [diaSemana, setDiaSemana] = useState(null);
    const [horaInicio, setHoraInicio] = useState(null);
    const [horaFin, setHoraFin] = useState(null);
    const [horaInicioTarde, setHoraInicioTarde] = useState(null);
    const [horaFinTarde, setHoraFinTarde] = useState(null);
    const [horaInicioNoche, setHoraInicioNoche] = useState(null);
    const [horaFinNoche, setHoraFinNoche] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        const disponibilidad = {
            diaSemana,
            horaInicio,
            horaFin,
            horaInicioTarde,
            horaFinTarde,
            horaInicioNoche,
            horaFinNoche
        };
        onAddDisponibilidad(disponibilidad);
        setDiaSemana(null);
        setHoraInicio(null);
        setHoraFin(null);
        setHoraInicioTarde(null);
        setHoraFinTarde(null);
        setHoraInicioNoche(null);
        setHoraFinNoche(null);
    };

    return (
        <form onSubmit={handleSubmit} className="disponibilidad-form">
            <div className="p-field p-grid">
                <label className="p-col-12 p-md-2">Día de la semana</label>
                <div className="p-col-12 p-md-10">
                    <Dropdown value={diaSemana} options={diasDeSemana} onChange={(e) => setDiaSemana(e.value)} placeholder="Seleccione un día de la semana" className="p-inputtext" />
                </div>
            </div>
            <div className="p-field p-grid">
                <label className="p-col-12 p-md-2">Hora de inicio mañana</label>
                <div className="p-col-12 p-md-10">
                    <Calendar value={horaInicio} onChange={(e) => setHoraInicio(e.value)} timeOnly hourFormat="24" placeholder="Hora de inicio mañana" className="p-inputtext" />
                </div>
            </div>
            <div className="p-field p-grid">
                <label className="p-col-12 p-md-2">Hora fin mañana</label>
                <div className="p-col-12 p-md-10">
                    <Calendar value={horaFin} onChange={(e) => setHoraFin(e.value)} timeOnly hourFormat="24" placeholder="Hora fin mañana" className="p-inputtext" />
                </div>
            </div>
            <div className="p-field p-grid">
                <label className="p-col-12 p-md-2">Hora de inicio tarde</label>
                <div className="p-col-12 p-md-10">
                    <Calendar value={horaInicioTarde} onChange={(e) => setHoraInicioTarde(e.value)} timeOnly hourFormat="24" placeholder="Hora de inicio tarde" className="p-inputtext" />
                </div>
            </div>
            <div className="p-field p-grid">
                <label className="p-col-12 p-md-2">Hora fin tarde</label>
                <div className="p-col-12 p-md-10">
                    <Calendar value={horaFinTarde} onChange={(e) => setHoraFinTarde(e.value)} timeOnly hourFormat="24" placeholder="Hora fin tarde" className="p-inputtext" />
                </div>
            </div>
            <div className="p-field p-grid">
                <label className="p-col-12 p-md-2">Hora de inicio noche</label>
                <div className="p-col-12 p-md-10">
                    <Calendar value={horaInicioNoche} onChange={(e) => setHoraInicioNoche(e.value)} timeOnly hourFormat="24" placeholder="Hora de inicio noche" className="p-inputtext" />
                </div>
            </div>
            <div className="p-field p-grid">
                <label className="p-col-12 p-md-2">Hora fin noche</label>
                <div className="p-col-12 p-md-10">
                    <Calendar value={horaFinNoche} onChange={(e) => setHoraFinNoche(e.value)} timeOnly hourFormat="24" placeholder="Hora fin noche" className="p-inputtext" />
                </div>
            </div>
            <div className="p-field p-grid">
                <div className="p-col-12 p-md-10 p-offset-md-2">
                    <Button label="Agregar Disponibilidad" type="submit" className="p-button p-component" />
                </div>
            </div>
        </form>
    );
};

export default DisponibilidadForm;
