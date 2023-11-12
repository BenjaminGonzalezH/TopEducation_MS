-- Creación de BD.
CREATE DATABASE Pruebas;

--Creación de tabla.
CREATE TABLE IF NOT EXISTS Pruebas(
	ID_Prueba SERIAL PRIMARY KEY,
	ID_Estudiante int,
	Puntaje int,
	Fecha_Reali DATE,
	Fecha_Resul DATE
);

--Insertar datos.
INSERT INTO Pruebas (ID_Prueba, ID_Estudiante, Puntaje, Fecha_Reali, Fecha_Resul)
VALUES
    (1, 1, 600, '2023-01-10', '2023-01-15'),
    (2, 1, 700, '2023-01-12', '2023-01-16'),
    (3, 1, 900, '2023-01-14', '2023-01-17'),
    (4, 2, 780, '2023-01-16', '2023-01-18'),
    (5, 2, 850, '2023-01-18', '2023-01-19'),
    (6, 3, 900, '2023-01-20', '2023-01-20'),
    (7, 3, 500, '2023-01-22', '2023-01-21'),
    (8, 3, 560, '2023-01-24', '2023-01-22');
	
SELECT setval('pruebas_id_prueba_seq', (SELECT MAX(ID_Prueba) FROM Pruebas));