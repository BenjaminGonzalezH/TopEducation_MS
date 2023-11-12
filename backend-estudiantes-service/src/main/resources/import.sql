-- Creación de BD.
CREATE DATABASE Estudiantes;

--Creación tabla.
CREATE TABLE IF NOT EXISTS Estudiantes(
	ID_Estudiante SERIAL PRIMARY KEY,
	RUT varchar(15),
	Apellidos varchar(255),
	Nombres varchar(255),
	Fecha_Nac Date,
	Tipo_Cole varchar(20),
	Nom_Cole varchar(200),
	Anio_Egre int
);

--Insertar datos.
INSERT INTO Estudiantes (ID_Estudiante, RUT, Apellidos, Nombres, Fecha_Nac, Tipo_Cole, Nom_Cole, Anio_Egre)
VALUES
    (1, '20.789.344-k', 'González Soto', 'Juan Patricia', '2000-05-10', 'Municipal', 'Colegio A', 2018),
    (2, '19.123.354-7', 'Martínez Molina', 'Ana Carmen', '2001-08-15', 'Privado', 'Colegio B', 2019),
    (3, '18.728.454-2', 'López Chávez', 'Carlos Raúl', '2002-03-25', 'Subvencionado', 'Colegio C', 2020),
    (4, '21.726.664-1', 'Rodríguez Reyes', 'Laura Elena', '2003-01-18', 'Subvencionado', 'Colegio D', 2021),
    (5, '22.113.314-5', 'Pérez Álvarez', 'María Gloria', '2000-11-02', 'Municipal', 'Colegio E', 2018),
    (6, '19.128.354-7', 'Sánchez Guerrero', 'Luis José', '2001-07-14', 'Privado', 'Colegio F', 2019),
    (7, '20.719.345-9', 'Ramírez Flores', 'Andrés Pablo', '2002-04-09', 'Subvencionado', 'Colegio G', 2020),
    (8, '20.721.614-3', 'Torres Romero', 'Sofía Isabel', '2003-02-28', 'Municipal', 'Colegio H', 2021),
    (9, '22.443.384-1', 'Díaz', 'Diego Fernando', '2000-10-22', 'Subvencionado', 'Colegio I', 2018),
    (10, '21.773.387-8', 'Vargas Espinoza', 'Paula Paz', '2001-06-07', 'Privado', 'Colegio J', 2019);
	
--Actualizar secuencia de ID´s.
SELECT setval('estudiantes_id_estudiante_seq', (SELECT MAX(ID_Estudiante) FROM Estudiantes));