import React, { useState, useEffect } from "react";
import EstudianteService from '../services/EstudiantesService';
import '../App.css';
import { Helmet } from "react-helmet";


function MostrarAlumnosComponent() {

    const [estudianteEntity, setEstudianteEntity] = useState([]);
    //const [input, setInput] = useState(initialState);

    useEffect(() => {
        EstudianteService.getEstudiantes().then((res) => {
            console.log("Response data Estudiante:", res.data);
            setEstudianteEntity(res.data);
            //setInput({ ...input, estudianteEntity: res.data });
        });
    }, []);

    return(
    <body>
        <div>
            <Helmet>
                <title>Mostrar Alumnos</title>
                <link rel="icon" href="./images/Logo.png"></link>
            </Helmet>

            <div className="container">
                <h1>Lista de Alumnos</h1>
            </div>

            <table>
                <thead>
                <tr>
                    <th>RUT</th>
                    <th>Nombres</th>
                    <th>Apellidos</th>
                    <th>Fecha de Nacimiento</th>
                    <th>Tipo de Colegio</th>
                    <th>Nombre de Colegio</th>
                </tr>
                </thead>
                <tbody>
                    {
                        estudianteEntity.map((estudiante) => (
                            <tr key= {estudiante.rut}>
                                <td> {estudiante.rut} </td>
                                <td> {estudiante.nombres} </td>
                                <td> {estudiante.apellidos} </td>
                                <td> {estudiante.fecha_nac} </td>
                                <td> {estudiante.tipo_cole} </td>
                                <td> {estudiante.nom_cole} </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    </body>
    )
}

export default MostrarAlumnosComponent