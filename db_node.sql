/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50505
Source Host           : localhost:3306
Source Database       : db_node

Target Server Type    : MYSQL
Target Server Version : 50505
File Encoding         : 65001

Date: 2021-10-08 12:00:24
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `tutorials`
-- ----------------------------
DROP TABLE IF EXISTS `tutorials`;
CREATE TABLE `tutorials` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `published` tinyint(1) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of tutorials
-- ----------------------------
INSERT INTO `tutorials` VALUES ('1', 'gdfg', 'dgfg', '0', '2021-10-07 14:05:19', '2021-10-07 14:05:19');
INSERT INTO `tutorials` VALUES ('2', 'test', 'test', '0', '2021-10-07 14:05:37', '2021-10-07 14:05:37');
INSERT INTO `tutorials` VALUES ('3', 'ytyrt', 'yrtyrt', '0', '2021-10-07 14:42:59', '2021-10-07 14:42:59');
