import React, { useState, useEffect } from 'react';
import { Helmet } from "react-helmet";
import '../App.css';
import ArchivosService from '../services/ArchivosService';

function CargarPruebasComponent() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [message, setMessage] = useState("");
  const [pruebas, setPruebas] = useState([]);

  useEffect(() => {
    ArchivosService.VerPruebas()
      .then(response => {
        setPruebas(response.data);
      })
      .catch(error => {
        console.error('Error al obtener pruebas:', error);
      });
  }, []);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
    setMessage("");
  };

  const handleFileUpload = () => {
    if (selectedFile) {
      const formData = new FormData();
      formData.append("file", selectedFile);

      ArchivosService.SubirPruebas(formData)
        .then(response => {
          setMessage("Archivo cargado exitosamente");
          console.log('Archivo cargado exitosamente', response);
          ArchivosService.ObtenerPruebas()
            .then(response => {
              setPruebas(response.data);
            })
            .catch(error => {
              console.error('Error al obtener pruebas:', error);
            });
        })
        .catch(error => {
          setMessage("Error al cargar el archivo: " + error);
          console.error('Error al cargar el archivo:', error);
        });
    } else {
      setMessage("Ningún archivo seleccionado");
      console.error('Ningún archivo seleccionado');
    }
  };

  return (
    <div>
      <Helmet>
        <title>Subir Pruebas</title>
        <link rel="icon" href="./images/Logo.png"></link>
      </Helmet>

      <div className="container">
        <h2>Cargar Archivo de Pruebas</h2>
        <input type="file" name="file" onChange={handleFileChange} accept=".csv" />
        <button onClick={handleFileUpload}>Cargar Archivo</button>
        <p>{message}</p>
      </div>

      <div className="container">
        <h2>Pruebas Recibidas</h2>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Puntaje</th>
              <th>Fecha Realización</th>
            </tr>
          </thead>
          <tbody>
            {pruebas.map(prueba => (
              <tr key={prueba.id_prueba}>
                <td>{prueba.id_prueba}</td>
                <td>{prueba.puntaje}</td>
                <td>{prueba.fecha_reali}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CargarPruebasComponent;