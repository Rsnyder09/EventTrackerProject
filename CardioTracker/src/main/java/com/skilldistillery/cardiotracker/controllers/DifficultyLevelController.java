package com.skilldistillery.cardiotracker.controllers;

import java.util.List;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.cardiotracker.entities.Cardio;
import com.skilldistillery.cardiotracker.entities.DifficultyLevel;
import com.skilldistillery.cardiotracker.services.CardioService;
import com.skilldistillery.cardiotracker.services.DifficultyLevelService;

@RestController
@RequestMapping("api")
public class DifficultyLevelController {
	@Autowired
	private DifficultyLevelService dLService;

	@Autowired
	private CardioService cardioService;

	@GetMapping("levels")
	public List<DifficultyLevel> getAllLevels(HttpServletResponse res) {
		List<DifficultyLevel> levels = null;
		try {
			levels = dLService.getAllLevels();
			res.setStatus(200);
		} catch (Exception e) {
			e.printStackTrace();
			res.setStatus(404);
		}
		return levels;
	}

	@GetMapping("levels/{id}")
	public DifficultyLevel getLevelsById(@PathVariable int id, HttpServletResponse res) {
		DifficultyLevel level = dLService.getLevelById(id);
		if (level == null) {
			res.setStatus(404);
		}
		res.setStatus(200);
		return level;
		
	}
	
	@GetMapping("levels/{cardioId}/workouts")
	public List<Cardio> getWorkoutsByLevel(@PathVariable Integer cardioId, HttpServletResponse res){
		List<Cardio> workouts = cardioService.getAllCardioByDifficulty(cardioId);
		if (workouts == null) {
			res.setStatus(404);
		}
		res.setStatus(200);
		return workouts;
		
	}
}

