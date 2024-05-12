-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 12, 2024 at 06:25 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `library`
--

-- --------------------------------------------------------

--
-- Table structure for table `book`
--

CREATE TABLE `book` (
  `id` int(11) NOT NULL,
  `code` text NOT NULL,
  `title` text NOT NULL,
  `author` text NOT NULL,
  `stock` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `book`
--

INSERT INTO `book` (`id`, `code`, `title`, `author`, `stock`) VALUES
(1, 'JK-45', 'Harry Potter', 'J.K Rowling', 1),
(2, 'SHR-1', 'A Study inArthur Conan Doyle Scarlet', 'Arthur Conan Doyle', 1),
(3, 'TW-11', 'Twilight', 'Stephenie Meyer', 1),
(4, 'HOB-83', 'The Hobbit, or There and Back Again', 'J.R.R. Tolkien', 1),
(5, 'NRN-7', 'The Lion, the Witch and the Wardrobe', 'C.S. Lewis', 1);

-- --------------------------------------------------------

--
-- Table structure for table `borrowed_book`
--

CREATE TABLE `borrowed_book` (
  `id` int(11) NOT NULL,
  `borrowDate` timestamp NOT NULL DEFAULT current_timestamp(),
  `book_id` int(11) DEFAULT NULL,
  `member_id` int(11) DEFAULT NULL,
  `isReturned` tinyint(4) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `borrowed_book`
--

INSERT INTO `borrowed_book` (`id`, `borrowDate`, `book_id`, `member_id`, `isReturned`) VALUES
(15, '2024-05-12 15:15:11', 1, 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `member`
--

CREATE TABLE `member` (
  `id` int(11) NOT NULL,
  `code` text NOT NULL,
  `name` text NOT NULL,
  `isUnderSanction` tinyint(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `member`
--

INSERT INTO `member` (`id`, `code`, `name`, `isUnderSanction`) VALUES
(1, 'M001', 'Angga', 0),
(2, 'M002', 'Ferry', 0),
(3, 'M003', 'Putri', 1),
(4, 'M004', 'Galih Dwi', 0);

-- --------------------------------------------------------

--
-- Table structure for table `returned_book`
--

CREATE TABLE `returned_book` (
  `id` int(11) NOT NULL,
  `returnDate` timestamp NOT NULL DEFAULT current_timestamp(),
  `member_id` int(11) DEFAULT NULL,
  `book_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `returned_book`
--

INSERT INTO `returned_book` (`id`, `returnDate`, `member_id`, `book_id`) VALUES
(8, '2024-05-12 15:15:31', 1, 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `book`
--
ALTER TABLE `book`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `borrowed_book`
--
ALTER TABLE `borrowed_book`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_6e23fd0485002eefdc242ffee26` (`member_id`),
  ADD KEY `FK_81f8be6a38b92884b3f15f7df88` (`book_id`);

--
-- Indexes for table `member`
--
ALTER TABLE `member`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `returned_book`
--
ALTER TABLE `returned_book`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_855471e7e74841ff24594adb8a8` (`book_id`),
  ADD KEY `FK_481887846bb19bd56fe66dadaf0` (`member_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `book`
--
ALTER TABLE `book`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `borrowed_book`
--
ALTER TABLE `borrowed_book`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `member`
--
ALTER TABLE `member`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `returned_book`
--
ALTER TABLE `returned_book`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `borrowed_book`
--
ALTER TABLE `borrowed_book`
  ADD CONSTRAINT `FK_6e23fd0485002eefdc242ffee26` FOREIGN KEY (`member_id`) REFERENCES `member` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `FK_81f8be6a38b92884b3f15f7df88` FOREIGN KEY (`book_id`) REFERENCES `book` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `returned_book`
--
ALTER TABLE `returned_book`
  ADD CONSTRAINT `FK_481887846bb19bd56fe66dadaf0` FOREIGN KEY (`member_id`) REFERENCES `member` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `FK_855471e7e74841ff24594adb8a8` FOREIGN KEY (`book_id`) REFERENCES `book` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
