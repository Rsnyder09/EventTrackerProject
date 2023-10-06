-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema cardiodb
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `cardiodb` ;

-- -----------------------------------------------------
-- Schema cardiodb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `cardiodb` DEFAULT CHARACTER SET utf8 ;
USE `cardiodb` ;

-- -----------------------------------------------------
-- Table `cardio`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `cardio` ;

CREATE TABLE IF NOT EXISTS `cardio` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(100) NULL,
  `cardio_date` DATE NULL,
  `start_time` TIME NULL,
  `stop_time` TIME NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

SET SQL_MODE = '';
DROP USER IF EXISTS cardio@localhost;
SET SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';
CREATE USER 'cardio'@'localhost' IDENTIFIED BY 'cardio';

GRANT SELECT, INSERT, TRIGGER, UPDATE, DELETE ON TABLE * TO 'cardio'@'localhost';

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `cardio`
-- -----------------------------------------------------
START TRANSACTION;
USE `cardiodb`;
INSERT INTO `cardio` (`id`, `title`, `cardio_date`, `start_time`, `stop_time`) VALUES (1, 'Aurora Reservoir Run', '2023-10-06', '06:00:00', '06:30:00');

COMMIT;

