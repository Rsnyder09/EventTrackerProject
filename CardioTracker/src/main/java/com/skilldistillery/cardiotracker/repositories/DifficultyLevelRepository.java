package com.skilldistillery.cardiotracker.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.cardiotracker.entities.DifficultyLevel;

public interface DifficultyLevelRepository extends JpaRepository<DifficultyLevel, Integer> {
	DifficultyLevel findById(int id);
}
