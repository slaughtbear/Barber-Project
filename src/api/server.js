import { error } from "console";
import express from "express"; // Importación de Express
import fs from "fs"; // Módulo para interactuar y modificar archivos dentro del proyecto
import bodyParser from "body-parser"; // Middleware para trabajar con datos enviados a través de formularios HTML o solicitudes JSON

const app = express(); // Constante que es igual a la ejecución de Express
app.use(bodyParser.json()); // Middleware para analizar el cuerpo de las solicitudes entrantes con formato JSON

// F U N C I O N E S
app.listen(4000, () => {
  // Función para que el servidor se ejecute en el puerto 4000
  console.log("Server listening on port 4000");
});

const readData = () => {
  // Lectura de datos
  try {
    const data = fs.readFileSync("./src/api/db.json"); // Archivo que está leyendo
    return JSON.parse(data); // Valor que retorna la función
  } catch (error) {
    console.log(error);
  }
};

const writeData = (data) => {
  // Escritura de datos
  try {
    fs.writeFileSync("./src/api/db.json", JSON.stringify(data)); // Función que convierte el objeto data en una cadena JSON
  } catch {
    console.log(error);
  }
};

// E N D P O I N T S
app.get("/", (req, res) => {
  res.send("Welcome to the Barber's API with Node js");
});

// Lectura de datos
app.get("/citas", (req, res) => {
  const data = readData();
  res.json(data);
});

// Endpoint para buscar una cita por ID
app.get("/citas/:id", (req, res) => {
  const data = readData();
  const id = parseInt(req.params.id); // Extracción del id para usarlo como parametro en la URL
  const cita = data.citas.find((cita) => cita.id === id); // Función para encontrar una cita mediante el ID proporcionado como parámetro
  res.json(cita);
  res.json(cita);
});

// Endpoint para guardar citas
app.post("/citas", (req, res) => {
  const data = readData();
  const body = req.body; // body permite acceder y trabajar con los datos del cuerpo de solicitud
  const nuevaCita = {
    // Objeto para guardar citas
    id: data.citas.length + 1, // Generación automática del id
    ...body, // spread operator para copiar todas las propiedades del objeto body en el objeto nuevaCita
  };
  data.citas.push(nuevaCita); // Se agrega la cita a las citas que estaban registradas
  writeData(data); // Se pasan los datos nuevos, que serían las citas registradas + la nueva cita
  res.json(nuevaCita); // Respuesta
});

// Endpoint para actualizar una cita por ID
app.put("/citas/:id", (req, res) => {
  const data = readData();
  const body = req.body; // body permite acceder y trabajar con los datos del cuerpo de solicitud
  const id = parseInt(req.params.id); // Extracción del id para usarlo como parametro en la URL
  const citaIndex = data.citas.findIndex((cita) => cita.id === id); // Buscar el índice de la cita que se está buscando
  data.citas[citaIndex] = {
    // El índice encontrado es igual a:
    ...data.citas[citaIndex], // spread operator para copiar todas las propiedades del objeto body en el objeto citaIndex
    ...body,
  };
  writeData(data); // Función para escribir los datos actualizados
  res.json({ message: "Cita actualizada correctamente" });
});

// Endpoint para eliminar citas por ID
app.delete("/citas/:id", (req, res) => {
  const data = readData();
  const id = parseInt(req.params.id); // Extracción del id para usarlo como parametro en la URL
  const citaIndex = data.citas.findIndex((cita) => cita.id === id); // Buscar el índice de la cita que se está buscando
  data.citas.splice(citaIndex, 1); // Método splice para eliminar mediante el index 
  writeData(data); // Función para escribir los datos actualizados
  res.json({ message: "Cita eliminada correctamente" });
});
