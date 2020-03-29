-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 30-03-2020 a las 00:50:54
-- Versión del servidor: 10.4.10-MariaDB
-- Versión de PHP: 7.3.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `my_app_restaurants`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `restaurants`
--

CREATE TABLE `restaurants` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `address` varchar(100) NOT NULL,
  `lat` float(10,6) NOT NULL,
  `lng` float(10,6) NOT NULL,
  `kind_food` set('vegetariana','vegana','india','española','asiatica','mexicana') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `restaurants`
--

INSERT INTO `restaurants` (`id`, `name`, `address`, `lat`, `lng`, `kind_food`) VALUES
(1, 'La Rosa Negra', 'Carrer dels Àngels, 6, 08001 Barcelona', 41.381916, 2.166595, 'mexicana'),
(2, 'Bar Jai-Ca', 'Carrer de Ginebra, 13, 08003 Barcelona', 41.381630, 2.186017, 'española'),
(3, 'Bun-Bo Raval', 'Carrer dels Àngels, 6, 08001 Barcelona', 41.381912, 2.166596, 'vegetariana,asiatica,mexicana'),
(4, 'Surya Pau Claris', 'Carrer de Pau Claris, 92, 08010 Barcelona', 41.390244, 2.170679, 'india'),
(5, 'Tandoor', 'Carrer d\'Aragó, 8, 08015 Barcelona', 41.379890, 2.148919, 'india'),
(6, 'Bar Bitácora', 'Carrer de Balboa, 1, 08003 Barcelona', 41.382095, 2.187666, 'india'),
(7, 'La vietnamita Sant Antoni', 'Carrer del Comte Borrell, 85, 08015 Barcelona', 41.378784, 2.160436, 'vegetariana'),
(8, 'L\'Atelier de Blai', 'Carrer de Blai, 38, 08004 Barcelona', 41.374119, 2.163640, 'española'),
(9, 'Bar Mendizabal', 'Carrer de la Junta de Comerç, 2, 08001 Barcelona', 41.380424, 2.170779, 'vegetariana,española'),
(10, 'El Tianguis', 'Carrer de Villarroel, 42, 08011 Barcelona', 41.382420, 2.160643, 'mexicana');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `restaurants`
--
ALTER TABLE `restaurants`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `restaurants`
--
ALTER TABLE `restaurants`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
