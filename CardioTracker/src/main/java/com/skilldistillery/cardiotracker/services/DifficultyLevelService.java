package com.skilldistillery.cardiotracker.services;

import java.util.List;

import com.skilldistillery.cardiotracker.entities.DifficultyLevel;

public interface DifficultyLevelService {
	List<DifficultyLevel> getAllLevels();
	
	DifficultyLevel getLevelById(int id);
}
