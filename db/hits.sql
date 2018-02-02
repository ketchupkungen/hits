-- --------------------------------------------------------
-- Värd:                         127.0.0.1
-- Serverversion:                5.7.19-log - MySQL Community Server (GPL)
-- Server OS:                    Win64
-- HeidiSQL Version:             9.5.0.5223
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- Dumping database structure for hits
CREATE DATABASE IF NOT EXISTS `hits` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `hits`;

-- Dumping structure for tabell hits.block_list
CREATE TABLE IF NOT EXISTS `block_list` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `users_id` int(11) unsigned NOT NULL,
  `participants_id` int(11) unsigned NOT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `users_id` (`users_id`),
  KEY `participants` (`participants_id`),
  CONSTRAINT `FK_block_list_participants` FOREIGN KEY (`participants_id`) REFERENCES `participants` (`id`),
  CONSTRAINT `FK_block_list_users` FOREIGN KEY (`users_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- Dumpar data för tabell hits.block_list: ~1 rows (ungefär)
/*!40000 ALTER TABLE `block_list` DISABLE KEYS */;
REPLACE INTO `block_list` (`id`, `users_id`, `participants_id`, `created_at`) VALUES
	(1, 4, 1, '2018-02-02 10:01:12');
/*!40000 ALTER TABLE `block_list` ENABLE KEYS */;

-- Dumping structure for tabell hits.channels
CREATE TABLE IF NOT EXISTS `channels` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `creator_id` int(11) unsigned NOT NULL DEFAULT '0',
  `title` varchar(40) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `updated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `deleted_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `creator_id` (`creator_id`),
  CONSTRAINT `FK_channels_users` FOREIGN KEY (`creator_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- Dumpar data för tabell hits.channels: ~1 rows (ungefär)
/*!40000 ALTER TABLE `channels` DISABLE KEYS */;
REPLACE INTO `channels` (`id`, `creator_id`, `title`, `created_at`, `updated_at`, `deleted_at`) VALUES
	(2, 4, 'xgbdf', '2018-02-02 09:24:46', '2018-02-02 09:24:46', NULL);
/*!40000 ALTER TABLE `channels` ENABLE KEYS */;

-- Dumping structure for tabell hits.deleted_channels
CREATE TABLE IF NOT EXISTS `deleted_channels` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `conversation_id` int(11) DEFAULT NULL,
  `users_id` int(11) DEFAULT NULL,
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `conversation_id` (`conversation_id`),
  UNIQUE KEY `users_id` (`users_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Dumpar data för tabell hits.deleted_channels: ~0 rows (ungefär)
/*!40000 ALTER TABLE `deleted_channels` DISABLE KEYS */;
/*!40000 ALTER TABLE `deleted_channels` ENABLE KEYS */;

-- Dumping structure for tabell hits.deleted_messages
CREATE TABLE IF NOT EXISTS `deleted_messages` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `messages_id` int(11) DEFAULT NULL,
  `users_id` int(11) DEFAULT NULL,
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `messages_id` (`messages_id`),
  UNIQUE KEY `users_id` (`users_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Dumpar data för tabell hits.deleted_messages: ~0 rows (ungefär)
/*!40000 ALTER TABLE `deleted_messages` DISABLE KEYS */;
/*!40000 ALTER TABLE `deleted_messages` ENABLE KEYS */;

-- Dumping structure for tabell hits.messages
CREATE TABLE IF NOT EXISTS `messages` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `channel_id` int(11) unsigned NOT NULL,
  `participants_id` int(11) unsigned NOT NULL,
  `sender_id` int(11) unsigned NOT NULL,
  `message` varchar(255) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `deleted_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `channel_id` (`channel_id`),
  KEY `participants_id` (`participants_id`),
  KEY `sender_id` (`sender_id`),
  CONSTRAINT `FK_messages_channels` FOREIGN KEY (`channel_id`) REFERENCES `channels` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_messages_participants` FOREIGN KEY (`participants_id`) REFERENCES `participants` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_messages_users` FOREIGN KEY (`sender_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- Dumpar data för tabell hits.messages: ~1 rows (ungefär)
/*!40000 ALTER TABLE `messages` DISABLE KEYS */;
REPLACE INTO `messages` (`id`, `channel_id`, `participants_id`, `sender_id`, `message`, `created_at`, `updated_at`, `deleted_at`) VALUES
	(2, 2, 1, 4, 'hhejj', '2018-02-02 09:58:09', '2018-02-02 09:58:09', NULL),
	(3, 2, 1, 5, 'Yo!', '2018-02-02 10:07:40', '2018-02-02 10:07:40', NULL);
/*!40000 ALTER TABLE `messages` ENABLE KEYS */;

-- Dumping structure for tabell hits.participants
CREATE TABLE IF NOT EXISTS `participants` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `channel_id` int(11) unsigned NOT NULL,
  `users_id` int(11) unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `channel_id` (`channel_id`),
  KEY `users_id` (`users_id`),
  CONSTRAINT `FK_participants_channels` FOREIGN KEY (`channel_id`) REFERENCES `channels` (`id`),
  CONSTRAINT `FK_participants_users` FOREIGN KEY (`users_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- Dumpar data för tabell hits.participants: ~1 rows (ungefär)
/*!40000 ALTER TABLE `participants` DISABLE KEYS */;
REPLACE INTO `participants` (`id`, `channel_id`, `users_id`) VALUES
	(1, 2, 4),
	(2, 2, 5);
/*!40000 ALTER TABLE `participants` ENABLE KEYS */;

-- Dumping structure for tabell hits.users
CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL DEFAULT '',
  `phone` varchar(16) DEFAULT NULL,
  `username` varchar(20) NOT NULL,
  `firstName` varchar(20) DEFAULT NULL,
  `lastName` varchar(20) DEFAULT NULL,
  `password` varchar(40) NOT NULL,
  `warnings` smallint(1) unsigned NOT NULL DEFAULT '0',
  `gender` enum('Man','Woman') NOT NULL,
  `role` enum('user','admin','banned') NOT NULL DEFAULT 'user',
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`),
  UNIQUE KEY `phone` (`phone`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

-- Dumpar data för tabell hits.users: ~2 rows (ungefär)
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
REPLACE INTO `users` (`id`, `email`, `phone`, `username`, `firstName`, `lastName`, `password`, `warnings`, `gender`, `role`, `created_at`, `updated_at`) VALUES
	(4, 'nm', '78', 'bob', NULL, NULL, '54', 0, 'Man', 'admin', '2018-02-02 08:59:35', '2018-02-02 08:59:37'),
	(5, 'bjorn.ohlsson.93@gmail.com', '0708416696', 'enkilleisvart', 'Björn', 'Ohlsson', 'banan1234', 0, 'Man', 'admin', '2018-02-02 10:02:04', '2018-02-02 10:02:04');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
