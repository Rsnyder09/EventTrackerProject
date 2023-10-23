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
-- Table `type`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `type` ;

CREATE TABLE IF NOT EXISTS `type` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `difficulty_level`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `difficulty_level` ;

CREATE TABLE IF NOT EXISTS `difficulty_level` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


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
  `distance` INT NULL,
  `url_image` VARCHAR(2000) NULL,
  `enabled` TINYINT NOT NULL DEFAULT 1,
  `type_id` INT NULL,
  `difficulty_level_id` INT NULL,
  `description` TEXT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_cardio_type_idx` (`type_id` ASC),
  INDEX `fk_cardio_difficulty_level1_idx` (`difficulty_level_id` ASC),
  CONSTRAINT `fk_cardio_type`
    FOREIGN KEY (`type_id`)
    REFERENCES `type` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_cardio_difficulty_level1`
    FOREIGN KEY (`difficulty_level_id`)
    REFERENCES `difficulty_level` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
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
-- Data for table `type`
-- -----------------------------------------------------
START TRANSACTION;
USE `cardiodb`;
INSERT INTO `type` (`id`, `name`) VALUES (1, 'Walk');
INSERT INTO `type` (`id`, `name`) VALUES (2, 'Hike');
INSERT INTO `type` (`id`, `name`) VALUES (3, 'Run');
INSERT INTO `type` (`id`, `name`) VALUES (4, 'Jump rope');
INSERT INTO `type` (`id`, `name`) VALUES (5, 'Row');
INSERT INTO `type` (`id`, `name`) VALUES (6, 'Bike');
INSERT INTO `type` (`id`, `name`) VALUES (7, 'Stairs');
INSERT INTO `type` (`id`, `name`) VALUES (8, 'Swim');

COMMIT;


-- -----------------------------------------------------
-- Data for table `difficulty_level`
-- -----------------------------------------------------
START TRANSACTION;
USE `cardiodb`;
INSERT INTO `difficulty_level` (`id`, `name`) VALUES (1, 'Minimum Effort');
INSERT INTO `difficulty_level` (`id`, `name`) VALUES (2, 'Light And Easy');
INSERT INTO `difficulty_level` (`id`, `name`) VALUES (3, 'Comfortable Pace');
INSERT INTO `difficulty_level` (`id`, `name`) VALUES (4, 'Comfortable With Some Effort');
INSERT INTO `difficulty_level` (`id`, `name`) VALUES (5, 'Progressive Pace');
INSERT INTO `difficulty_level` (`id`, `name`) VALUES (6, 'Hard Activity');
INSERT INTO `difficulty_level` (`id`, `name`) VALUES (7, 'Vigorous Activity');
INSERT INTO `difficulty_level` (`id`, `name`) VALUES (8, 'Hard Intensity');
INSERT INTO `difficulty_level` (`id`, `name`) VALUES (9, 'Very Hard Intensity');
INSERT INTO `difficulty_level` (`id`, `name`) VALUES (10, 'All-Out Sprint');

COMMIT;


-- -----------------------------------------------------
-- Data for table `cardio`
-- -----------------------------------------------------
START TRANSACTION;
USE `cardiodb`;
INSERT INTO `cardio` (`id`, `title`, `cardio_date`, `start_time`, `stop_time`, `distance`, `url_image`, `enabled`, `type_id`, `difficulty_level_id`, `description`) VALUES (1, 'Aurora Reservoir Walk', '2023-10-06', '06:00:00', '06:30:00', 1, 'https://i0.wp.com/trailsnet.com/wp-content/uploads/2012/09/Aurora-Reservoir-Trail.jpg', 1, 1, 1, 'Great views for a casual walk');
INSERT INTO `cardio` (`id`, `title`, `cardio_date`, `start_time`, `stop_time`, `distance`, `url_image`, `enabled`, `type_id`, `difficulty_level_id`, `description`) VALUES (2, 'Royal Arch Trail in Boulder,CO', '2023-10-07', '07:00:00', '07:30:00', 2, 'https://cdn.5280.com/2015/10/p1040373_0.jpg', 1, 2, 2, 'Beautiful Hike in the mountains!');
INSERT INTO `cardio` (`id`, `title`, `cardio_date`, `start_time`, `stop_time`, `distance`, `url_image`, `enabled`, `type_id`, `difficulty_level_id`, `description`) VALUES (3, 'Kangaroo workout', '2023-10-08', '08:00:00', '08:30:00', 1, 'https://epokperformance.com/wp-content/uploads/2021/04/does-jumping-rope-increase-your-vertical-2.png', 1, 4, 3, 'Jump around!');
INSERT INTO `cardio` (`id`, `title`, `cardio_date`, `start_time`, `stop_time`, `distance`, `url_image`, `enabled`, `type_id`, `difficulty_level_id`, `description`) VALUES (4, 'Stationary Row', '2023-10-09', '09:00:00', '09:30:00', 3, 'https://media.cnn.com/api/v1/images/stellar/prod/221202151738-echelon-lead.jpg?c=original', 1, 5, 4, 'Row row row your boat');
INSERT INTO `cardio` (`id`, `title`, `cardio_date`, `start_time`, `stop_time`, `distance`, `url_image`, `enabled`, `type_id`, `difficulty_level_id`, `description`) VALUES (5, 'Nice Little Bike Ride', '2023-10-10', '10:00:00', '10:30:00', 8, 'https://d28w2s5u3j4b6n.cloudfront.net/blog/wp-content/uploads/2023/06/child-friendlyhikingtrails_05.jpg', 1, 6, 5, 'Casual cruise around the reservoir');
INSERT INTO `cardio` (`id`, `title`, `cardio_date`, `start_time`, `stop_time`, `distance`, `url_image`, `enabled`, `type_id`, `difficulty_level_id`, `description`) VALUES (6, 'Stair Master', '2023-10-11', '11:00:00', '11:30:00', 1, 'https://freedomfitnessequipment.com/cdn/shop/files/20230718_073904_800x.jpg?v=1689712089', 1, 7, 6, 'Up up and away');
INSERT INTO `cardio` (`id`, `title`, `cardio_date`, `start_time`, `stop_time`, `distance`, `url_image`, `enabled`, `type_id`, `difficulty_level_id`, `description`) VALUES (7, 'Swimming like a fish', '2023-10-12', '12:00:00', '12:30:00', 1, 'https://images.squarespace-cdn.com/content/v1/5e8f8562c4d500235a3615fe/1587078674857-GNQ9UIL5AB5X0IO1PZLT/Lap+Swim+2.jpg', 1, 8, 7, 'That was tough');
INSERT INTO `cardio` (`id`, `title`, `cardio_date`, `start_time`, `stop_time`, `distance`, `url_image`, `enabled`, `type_id`, `difficulty_level_id`, `description`) VALUES (8, 'Long run', '2023-10-13', '13:00:00', '14:00:00', 5, 'https://static-maps.alltrails.com/production/at-map/27173457/v1-trail-us-colorado-aurora-reservoir-at-map-27173457-1689170735-327w203h-en-US-i-2-style_3.png', 1, 3, 8, 'Longest run in a while!');
INSERT INTO `cardio` (`id`, `title`, `cardio_date`, `start_time`, `stop_time`, `distance`, `url_image`, `enabled`, `type_id`, `difficulty_level_id`, `description`) VALUES (9, 'Race pace', '2023-10-14', '14:00:00', '14:15:00', 2, 'https://www.collinsdictionary.com/images/full/runningtrack_105755576.jpg', 1, 3, 9, 'Race effort, needs work.');
INSERT INTO `cardio` (`id`, `title`, `cardio_date`, `start_time`, `stop_time`, `distance`, `url_image`, `enabled`, `type_id`, `difficulty_level_id`, `description`) VALUES (10, 'Sprints', '2023-10-15', '15:00:00', '15:30:00', 1, 'https://hips.hearstapps.com/hmg-prod/images/nike-zoomx-dragonfly-lead-1633805728.jpg', 1, 3, 10, 'Sprints SUCK!');

COMMIT;

