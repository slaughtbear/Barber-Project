import React from "react";

function CitasCard({ cita }) {
    return(
        <div>
            <h2>{cita.nombre_cliente}</h2>
            <p>fecha: {cita.fecha}</p>
            <p>hora: {cita.hora}</p>
            <p>servicio: {cita.servicio}</p>
            <p>Telefono: {cita.telefono}</p>
        </div>
    );
}


export default CitasCard;