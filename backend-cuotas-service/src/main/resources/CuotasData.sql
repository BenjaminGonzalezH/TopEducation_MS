-- Creación de BD.
CREATE DATABASE Cuotas;

-- Creación tabla.
CREATE TABLE IF NOT EXISTS Cuotas(
	ID_Cuota SERIAL PRIMARY KEY,
	ID_Estudiante int,
	Monto_Primario FLOAT,
	Tipo_Pag varchar(20),
	Estado varchar(20),
	Monto_Pagado FLOAT,
	Fecha_crea Date,
	Fecha_pago Date,
	Meses_Atra int
);

-- Insersión datos.
INSERT INTO Cuotas (ID_Cuota, ID_Estudiante, Monto_Primario, Tipo_Pag, Estado, Monto_Pagado, Fecha_crea, Fecha_pago, Meses_Atra)
VALUES
    (1, 1, 500.00, 'Cuota', 'Pagada', 500.00, '2022-01-15', '2022-01-15',0),
    (2, 1, 600.00, 'Cuota', 'Pendiente', 600.00, '2022-02-15', '2022-02-15',0),
    (3, 1, 550.00, 'Cuota', 'Pendiente', 550.00, '2022-03-15', '2022-03-15',0),
    (4, 1, 700.00, 'Cuota', 'Pagada', 700.00, '2022-04-15', '2022-04-15',0),
    (5, 1, 650.00, 'Cuota', 'Pendiente', 650.00, '2022-05-15', '2022-05-15',1),
    (6, 2, 750.00, 'Cuota', 'Pendiente', 750.00, '2022-06-15', '2022-06-15',1),
    (7, 2, 600.00, 'Cuota', 'Pagada', 600.00, '2022-07-15', '2022-07-15',4),
    (8, 2, 700.00, 'Cuota', 'Pendiente', 700.00, '2022-08-15', '2022-08-15',4),
    (9, 10, 550.00, 'Contado', 'Pendiente', 550.00, '2022-09-15', '2022-09-15',4),
    (10, 7, 800.00, 'Cuota', 'Pendiente', 800.00, '2022-10-15', '2022-10-15',0),
    (11, 7, 750.00, 'Cuota', 'Pendiente', 750.00, '2022-11-15', '2022-11-15',7),
    (12, 7, 700.00, 'Cuota', 'Pendiente', 700.00, '2022-12-15', '2022-12-15',7),
    (13, 7, 500.00, 'Cuota', 'Pendiente', 500.00, '2023-01-15', '2023-01-15',0),
    (14, 3, 600.00, 'Cuota', 'Pagada', 600.00, '2023-02-15', '2023-02-15',0),
    (15, 3, 550.00, 'Cuota', 'Pendiente', 550.00, '2023-03-15', '2023-03-15',0),
    (16, 3, 700.00, 'Cuota', 'Pendiente', 700.00, '2023-04-15', '2023-04-15',0),
    (17, 3, 650.00, 'Cuota', 'Pagada', 650.00, '2023-05-15', '2023-05-15',1),
    (18, 3, 750.00, 'Cuota', 'Pendiente', 750.00, '2023-06-15', '2023-06-15',1),
    (19, 3, 600.00, 'Cuota', 'Pendiente', 600.00, '2023-07-15', '2023-07-15',2),
    (20, 3, 700.00, 'Cuota', 'Pendiente', 700.00, '2023-08-15', '2023-08-15',2),
    (21, 6, 550.00, 'Contado', 'Pagada', 550.00, '2023-09-15', '2023-09-15',3),
    (22, 8, 800.00, 'Cuota', 'Pendiente', 800.00, '2023-10-15', '2023-10-15',3),
    (23, 8, 750.00, 'Cuota', 'Pagada', 750.00, '2023-11-15', '2023-11-15',0),
    (24, 8, 700.00, 'Cuota', 'Omitida', 700.00, '2023-12-15', '2023-12-15',0);

-- Contador de ID.
SELECT setval('cuotas_id_cuota_seq', (SELECT MAX(ID_Cuota) FROM Cuotas));