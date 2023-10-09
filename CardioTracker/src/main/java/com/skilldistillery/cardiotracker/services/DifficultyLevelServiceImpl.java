package com.skilldistillery.cardiotracker.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.cardiotracker.entities.DifficultyLevel;
import com.skilldistillery.cardiotracker.repositories.DifficultyLevelRepository;

@Service
public class DifficultyLevelServiceImpl implements DifficultyLevelService {

	@Autowired
	DifficultyLevelRepository dLRepo;

	@Override
	public List<DifficultyLevel> getAllLevels() {
		return dLRepo.findAll();
	}

	@Override
	public DifficultyLevel getLevelById(int id) {
		DifficultyLevel level = dLRepo.findById(id);
		if(level != null) {
			return level;
		} else {
		return null;
		}
	}
	
	
}
