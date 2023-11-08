import React from "react";
import "./App.css";
import { Helmet } from "react-helmet";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import MostrarAlumnosComponent from "./components/MostrarAlumnosComponent";
import IngresarAlumnosComponent from "./components/IngresarAlumnosComponent";
import CuotasEstudianteComponent from "./components/CuotasEstudianteComponent";
import ObtenerArancelesComponent from "./components/ObtenerArancelesComponent";
import ObtenerPagosComponent from "./components/ObtenerPagosComponent";

function App() {
  return (
  <body>
    <div>
      <Helmet>
        <title>TopEducation</title>
        <link rel="icon" href="./images/Logo.png"></link>
      </Helmet>

      <Router>
        <div>
          <nav className="navbar">
            <Link to="/student">Mostrar Alumnos</Link>
            <Link to="/student/Form">Ingresar Alumnos</Link>
            <Link to="/Cuotas/AskRut">Cuotas Estudiante</Link>
            {/*<Link to="/Cuotas/Form">Generar Cuotas</Link>
            <Link to="/Pruebas/Upload">Subir Datos Pruebas</Link>*/}
            <Link to="/Reportes/Aranceles">Obtener Planilla de aranceles</Link>
            <Link to="/Reportes/Pagos">Obtener Reporte estado de pagos</Link>
          </nav>

          <Routes>
            <Route path="/student" element={<MostrarAlumnosComponent />} />
            <Route path="/student/Form" element={<IngresarAlumnosComponent />} />
            <Route path="/Cuotas/AskRut" element={<CuotasEstudianteComponent />} />
            {/*<Route path="/Cuotas/Form" element={<GenerarCuotasComponent />} />
            <Route path="/Pruebas/Upload" element={<CargarPruebasComponent />} />*/}
            <Route path="/Reportes/Aranceles" element={<ObtenerArancelesComponent />} />
            <Route path="/Reportes/Pagos" element={<ObtenerPagosComponent />} />
          </Routes>
        </div>
      </Router>
    </div>
  </body>
  );
}

export default App;
