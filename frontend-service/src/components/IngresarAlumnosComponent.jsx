import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Swal from 'sweetalert2';
import EstudianteService from '../services/EstudiantesService';
import '../App.css';

function IngresarAlumnosComponent(props){
    
    const initialState = {
        rut: "",
        nombres: "",
        apellidos: "",
        fecha_nac: "",
        tipo_cole: "",
        nom_cole: "",
        anio_egre: 0,
    };

    const [input, setInput] = useState(initialState);
    const navigate = useNavigate();
    const navigateHome = () => {
        navigate("/");
    };

     const changeRutHandler = event => {
        setInput({ ...input, rut: event.target.value });
    };
    const changeNombresHandler = event => {
        setInput({ ...input, nombres: event.target.value });
    };
    const changeApellidoHandler = event => {
        setInput({ ...input, apellidos: event.target.value });
    };
    const changeFechaNacimientoHandler = event => {
        setInput({ ...input, fecha_nac: event.target.value });
    };
    const changeAnioEgresoIDHandler = event => {
        setInput({ ...input, anio_egre: event.target.value });
    };
    const changeTipoColegioHandler = event => {
        setInput({ ...input, tipo_cole: event.target.value });
    };
    const changeNombreColegioHandler = event => {
        setInput({ ...input, nom_cole: event.target.value });
    };

    const ingresarEstudiante = (event) => {
        Swal.fire({
            title: "¿Desea registrar el estudiante?",
            text: "No podra cambiarse en caso de equivocación",
            icon: "question",
            showDenyButton: true,
            confirmButtonText: "Confirmar",
            confirmButtonColor: "rgb(68, 194, 68)",
            denyButtonText: "Cancelar",
            denyButtonColor: "rgb(190, 54, 54)",
        }).then((result) => {
            if (result.isConfirmed) {
                console.log(input.title);
                let newEstudiante = {
                    rut: input.rut,
                    nombres: input.nombres,
                    apellidos: input.apellidos,
                    fecha_nac: input.fecha_nac,
                    tipo_cole: input.tipo_cole,
                    nom_cole: input.nom_cole,
                    anio_egre: input.anio_egre,
                };
                console.log(newEstudiante);
                EstudianteService.createEstudiante(newEstudiante);
                Swal.fire({
                    title: "Enviado",
                    timer: 2000,
                    icon: "success",
                    timerProgressBar: true,
                    didOpen: () => {
                        Swal.showLoading()
                      },
                    })
                navigateHome();
            }
        });
    };

    return(
        <body>
            <div className="container">
                <h2>Registro Estudiante</h2>
                <Form>
                    <Form.Group className="mb-3" controlId="rut" value = {input.rut} onChange={changeRutHandler}>
                        <Form.Label className="agregar">Rut:</Form.Label>
                        <Form.Control className="agregar" type="text" name="rut"/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="nombres" value = {input.nombres} onChange={changeNombresHandler}>
                        <Form.Label className="agregar">Nombres:</Form.Label>
                        <Form.Control className="agregar" type="text" name="nombres"/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="apellidos" value = {input.apellidos} onChange={changeApellidoHandler}>
                        <Form.Label className="agregar">Apellidos:</Form.Label>
                        <Form.Control className="agregar" type="text" name="apellidos"/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="fecha_nac" value = {input.fecha_nac} onChange={changeFechaNacimientoHandler}>
                        <Form.Label className="agregar">Fecha de Nacimiento:</Form.Label>
                        <Form.Control className="agregar" type="date" name="fecha_nac"/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="anio_egre">
                        <Form.Label className="agregar">Años de egreso del colegio:</Form.Label>
                        <Form.Control
                        className="agregar"
                        type="number"
                        name="anio_egre"
                        value={input.anio_egre}
                        onChange={changeAnioEgresoIDHandler}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="tipo_cole">
                        <Form.Label className="agregar"> Tipo: </Form.Label>
                        <select className="agregar" name="tipo_colegio" required value = {input.tipo_cole} onChange={changeTipoColegioHandler}>
                            <option value="Municipal">Municipal</option>
                            <option value="Subvencionado">Subvencionado</option>
                            <option value="Privado">Privado</option>
                        </select>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="nom_cole" value = {input.nom_cole} onChange={changeNombreColegioHandler}>
                        <Form.Label className="agregar">Nombre del colegio:</Form.Label>
                        <Form.Control className="agregar" type="text" name="nom_cole"/>
                    </Form.Group>

                    <Button className="boton" onClick={ingresarEstudiante}>Registrar Alumno</Button>
                </Form>
            </div>
        </body>
    )
}

export default IngresarAlumnosComponent