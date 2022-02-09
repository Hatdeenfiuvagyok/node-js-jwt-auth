-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Gép: 127.0.0.1
-- Létrehozás ideje: 2022. Feb 09. 17:29
-- Kiszolgáló verziója: 10.4.21-MariaDB
-- PHP verzió: 8.0.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Adatbázis: `zarodolgozat`
--

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `etrend_tipus`
--

CREATE TABLE `etrend_tipus` (
  `id` int(11) NOT NULL,
  `etrend_tipus_nev` varchar(50) COLLATE utf8_hungarian_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

--
-- A tábla adatainak kiíratása `etrend_tipus`
--

INSERT INTO `etrend_tipus` (`id`, `etrend_tipus_nev`) VALUES
(1, 'Fehérjék'),
(2, 'Vitaminok'),
(3, 'Tömegnövelők'),
(4, 'Aminosavak');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `izomcsoportok`
--

CREATE TABLE `izomcsoportok` (
  `izomcsoport_id` int(11) NOT NULL,
  `izomcsoport_nev` varchar(255) COLLATE utf8_hungarian_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

--
-- A tábla adatainak kiíratása `izomcsoportok`
--

INSERT INTO `izomcsoportok` (`izomcsoport_id`, `izomcsoport_nev`) VALUES
(1, 'Mell'),
(2, 'Bicepsz'),
(3, 'Tricepsz'),
(4, 'Váll'),
(5, 'Hát'),
(6, 'Has/Törzsizom'),
(7, 'Vádli'),
(8, 'Comb/Far izom'),
(9, 'Alkar');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `izomcsoport_kepek`
--

CREATE TABLE `izomcsoport_kepek` (
  `kepek_id` int(11) NOT NULL,
  `kepek` varchar(50) COLLATE utf8_hungarian_ci NOT NULL,
  `izomcsoportok_id` int(11) NOT NULL,
  `kepek_leiras` varchar(1000) COLLATE utf8_hungarian_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

--
-- A tábla adatainak kiíratása `izomcsoport_kepek`
--

INSERT INTO `izomcsoport_kepek` (`kepek_id`, `kepek`, `izomcsoportok_id`, `kepek_leiras`) VALUES
(1, 'chest1.png', 1, 'Egyszerre csak egy lábat nyújtson ki, és vegye fel a fekvőtámasz pozíciót egyenes lábakkal, a könyökök kinyújtva, és a fej semleges helyzetben, a padlóra nézve.\nLassan ereszkedjen le a padlóra a lapockák visszahúzásával és a könyökök kinyitásával.\nEreszkedjen le, amíg a felkarok párhuzamosak, vagy a mellkasa megérinti a padlót.\nNyomja vissza a kiindulási pontra a könyök meghosszabbításával és a tenyerét a padlóba vezetve. Ismételje meg a kívánt számú ismétlést.'),
(2, 'chest2.png', 1, ''),
(3, 'chest3.png', 1, ''),
(4, 'chest4.png', 1, ''),
(7, 'chest5.png', 1, ''),
(8, 'chest6.png', 1, ''),
(9, 'chest7.png', 1, ''),
(10, 'chest8.png', 1, ''),
(11, 'chest9.png', 1, ''),
(12, 'chest10.png', 1, ''),
(13, 'chest11.png', 1, ''),
(14, 'biceps1.png', 2, ''),
(15, 'biceps2.png', 2, ''),
(16, 'biceps3.png', 2, ''),
(17, 'biceps4.png', 2, ''),
(18, 'biceps5.png', 2, ''),
(19, 'biceps6.png', 2, ''),
(20, 'biceps7.png', 2, ''),
(21, 'biceps8.png', 2, ''),
(22, 'biceps9.png', 2, ''),
(23, 'triceps1.png', 3, ''),
(24, 'triceps2.png', 3, ''),
(25, 'triceps3.png', 3, ''),
(26, 'triceps4.png', 3, ''),
(27, 'triceps5.png', 3, ''),
(28, 'triceps6.png', 3, ''),
(29, 'triceps7.png', 3, ''),
(30, 'triceps8.png', 3, ''),
(31, 'triceps9.png', 3, ''),
(32, 'triceps10.png', 3, ''),
(33, 'triceps11.png', 3, ''),
(34, 'shoulder1.png', 4, ''),
(35, 'shoulder2.png', 4, ''),
(36, 'shoulder3.png', 4, ''),
(37, 'shoulder4.png', 4, ''),
(38, 'shoulder5.png', 4, ''),
(39, 'shoulder6.png', 4, ''),
(40, 'shoulder7.png', 4, ''),
(41, 'shoulder8.png', 4, ''),
(42, 'shoulder9.png', 4, ''),
(43, 'shoulder10.png', 4, ''),
(44, 'shoulder11.png', 4, ''),
(45, 'upperback1.png', 5, ''),
(46, 'upperback2.png', 5, ''),
(47, 'upperback3.png', 5, ''),
(48, 'upperback4.png', 5, ''),
(49, 'lats1.png', 5, ''),
(50, 'lats2.png', 5, ''),
(51, 'lats3.png', 5, ''),
(52, 'lats4.png', 5, ''),
(53, 'lats5.png', 5, ''),
(54, 'lats6.png', 5, ''),
(57, 'abs1.png', 6, ''),
(58, 'abs2.png', 6, ''),
(59, 'abs3.png', 6, ''),
(60, 'abs4.png', 6, ''),
(61, 'abs5.png', 6, ''),
(62, 'abs6.png', 6, ''),
(63, 'lowerback1.png', 6, ''),
(64, 'lowerback2.png', 6, ''),
(65, 'calf1.png', 7, ''),
(66, 'calf2.png', 7, ''),
(67, 'calf3.png', 7, ''),
(68, 'calf4.png', 7, ''),
(69, 'calf5.png', 7, ''),
(70, 'quad1.png', 8, ''),
(71, 'quad2.png', 8, ''),
(72, 'quad3.png', 8, ''),
(73, 'quad4.png', 8, ''),
(74, 'quad5.png', 8, ''),
(75, 'adductor1.png', 8, ''),
(76, 'far1.png', 8, ''),
(77, 'forearm1.png', 9, ''),
(78, 'forearm2.png', 9, ''),
(79, 'teszt1.png', 1, 'dsfdghjhjhgfdsa'),
(80, 'teszt1.png', 1, 'dsfdghjhjhgfdsa'),
(81, 'teszt1.png', 1, 'alam');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `kiegeszitok`
--

CREATE TABLE `kiegeszitok` (
  `id` int(11) NOT NULL,
  `kiegeszitok_nev` varchar(255) COLLATE utf8_hungarian_ci NOT NULL,
  `etrend_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

--
-- A tábla adatainak kiíratása `kiegeszitok`
--

INSERT INTO `kiegeszitok` (`id`, `kiegeszitok_nev`, `etrend_id`) VALUES
(1, 'Just Whey Fehérje', 1),
(2, 'Opti-Lean Whey Fehérje', 1),
(3, 'Swanson - A & D Vitamin', 2),
(4, 'Now Foods - A Vitamin', 2);

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `roles`
--

CREATE TABLE `roles` (
  `id` int(11) NOT NULL,
  `name` varchar(255) COLLATE utf8_hungarian_ci DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

--
-- A tábla adatainak kiíratása `roles`
--

INSERT INTO `roles` (`id`, `name`, `createdAt`, `updatedAt`) VALUES
(1, 'user', '2020-08-02 14:57:31', '2020-08-02 14:57:31'),
(2, 'moderator', '2020-08-02 14:57:31', '2020-08-02 14:57:31'),
(3, 'admin', '2020-08-02 14:57:31', '2020-08-02 14:57:31');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(255) COLLATE utf8_hungarian_ci DEFAULT NULL,
  `email` varchar(255) COLLATE utf8_hungarian_ci DEFAULT NULL,
  `password` varchar(255) COLLATE utf8_hungarian_ci DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

--
-- A tábla adatainak kiíratása `users`
--

INSERT INTO `users` (`id`, `username`, `email`, `password`, `createdAt`, `updatedAt`) VALUES
(1, 'user', 'user', '$2a$08$gXM4pyuhZFlC72PeAwxrUOR0uA31/d2PdgnHP35JGV.0bQNiZBatS', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(2, 'mod', 'mod', '$2a$08$gXM4pyuhZFlC72PeAwxrUOR0uA31/d2PdgnHP35JGV.0bQNiZBatS', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(3, 'admin', 'admin', '$2a$08$97Ze1/hXfOX44WdC62Rq8uRkog9HYC1HukRX8eld2ZEKPyenM5v.G', '2020-08-02 15:03:59', '2020-08-02 15:03:59');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `user_roles`
--

CREATE TABLE `user_roles` (
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `roleId` int(11) NOT NULL,
  `userId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

--
-- A tábla adatainak kiíratása `user_roles`
--

INSERT INTO `user_roles` (`createdAt`, `updatedAt`, `roleId`, `userId`) VALUES
('0000-00-00 00:00:00', '0000-00-00 00:00:00', 1, 1),
('2020-08-02 15:04:00', '2020-08-02 15:04:00', 1, 3),
('0000-00-00 00:00:00', '0000-00-00 00:00:00', 2, 2),
('0000-00-00 00:00:00', '0000-00-00 00:00:00', 2, 3),
('2020-08-02 15:04:00', '2020-08-02 15:04:00', 3, 3);

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `uzenetek`
--

CREATE TABLE `uzenetek` (
  `uzenet_id` int(11) NOT NULL,
  `uzenet_nev` varchar(50) COLLATE utf8_hungarian_ci NOT NULL,
  `uzenet_szoveg` varchar(255) COLLATE utf8_hungarian_ci NOT NULL,
  `uzenet_datum` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

--
-- A tábla adatainak kiíratása `uzenetek`
--

INSERT INTO `uzenetek` (`uzenet_id`, `uzenet_nev`, `uzenet_szoveg`, `uzenet_datum`) VALUES
(1, 'David', 'Jo az oldal', '2022-01-05'),
(2, 'Attila ', 'Kokszolok', '2022-01-05'),
(27, 'asd', 'asd', '2022-02-02');

--
-- Indexek a kiírt táblákhoz
--

--
-- A tábla indexei `etrend_tipus`
--
ALTER TABLE `etrend_tipus`
  ADD PRIMARY KEY (`id`);

--
-- A tábla indexei `izomcsoportok`
--
ALTER TABLE `izomcsoportok`
  ADD PRIMARY KEY (`izomcsoport_id`);

--
-- A tábla indexei `izomcsoport_kepek`
--
ALTER TABLE `izomcsoport_kepek`
  ADD PRIMARY KEY (`kepek_id`),
  ADD KEY `izomcsoportok_id` (`izomcsoportok_id`);

--
-- A tábla indexei `kiegeszitok`
--
ALTER TABLE `kiegeszitok`
  ADD PRIMARY KEY (`id`),
  ADD KEY `etrend_id` (`etrend_id`);

--
-- A tábla indexei `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`);

--
-- A tábla indexei `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- A tábla indexei `user_roles`
--
ALTER TABLE `user_roles`
  ADD PRIMARY KEY (`roleId`,`userId`),
  ADD KEY `userId` (`userId`);

--
-- A tábla indexei `uzenetek`
--
ALTER TABLE `uzenetek`
  ADD PRIMARY KEY (`uzenet_id`);

--
-- A kiírt táblák AUTO_INCREMENT értéke
--

--
-- AUTO_INCREMENT a táblához `etrend_tipus`
--
ALTER TABLE `etrend_tipus`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT a táblához `izomcsoportok`
--
ALTER TABLE `izomcsoportok`
  MODIFY `izomcsoport_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT a táblához `izomcsoport_kepek`
--
ALTER TABLE `izomcsoport_kepek`
  MODIFY `kepek_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=84;

--
-- AUTO_INCREMENT a táblához `kiegeszitok`
--
ALTER TABLE `kiegeszitok`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT a táblához `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT a táblához `uzenetek`
--
ALTER TABLE `uzenetek`
  MODIFY `uzenet_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- Megkötések a kiírt táblákhoz
--

--
-- Megkötések a táblához `izomcsoport_kepek`
--
ALTER TABLE `izomcsoport_kepek`
  ADD CONSTRAINT `izomcsoport_kepek_ibfk_1` FOREIGN KEY (`izomcsoportok_id`) REFERENCES `izomcsoportok` (`izomcsoport_id`);

--
-- Megkötések a táblához `kiegeszitok`
--
ALTER TABLE `kiegeszitok`
  ADD CONSTRAINT `kiegeszitok_ibfk_1` FOREIGN KEY (`etrend_id`) REFERENCES `etrend_tipus` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
