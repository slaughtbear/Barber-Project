import { useState, useEffect } from 'react';
import './index.css';

function CitasList() {
  const [citas, setCitas] = useState([]);

  useEffect(() => {
    const obtenerCitas = async () => {
      try {
        const response = await fetch('/citas'); // Hacer una solicitud a la ruta '/citas' en tu servidor
        const data = await response.json();
        setCitas(data.citas); // Establecer el estado de las citas con los datos obtenidos del servidor
      } catch (error) {
        console.error('Error al obtener las citas:', error);
      }
    };

    obtenerCitas();
  }, []);

  return (
    <div className="container">
      <h1>Lista de Citas</h1>
      <div className="citas">
        {citas.map(cita => (
          <div key={cita.id} className="card">
            <h2>{cita.nombre_cliente}</h2>
            <p>Fecha: {cita.fecha}</p>
            <p>Hora: {cita.hora}</p>
            <p>Servicio: {cita.servicio}</p>
            <p>Teléfono: {cita.telefono}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CitasList;
