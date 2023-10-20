package com.skilldistillery.cardiotracker.controllers;

import java.util.List;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.cardiotracker.entities.Cardio;
import com.skilldistillery.cardiotracker.entities.Type;
import com.skilldistillery.cardiotracker.services.CardioService;
import com.skilldistillery.cardiotracker.services.TypeService;
@CrossOrigin({"*", "http://localhost/"})
@RestController
@RequestMapping("api")
public class TypeController {

	@Autowired
	private TypeService typeService;
	
	@Autowired
	private CardioService cardioService;
	
	@GetMapping("types")
	public List<Type> typesOfWorkouts(HttpServletResponse res){
		List<Type> workoutTypes = null;
		try {
			workoutTypes = typeService.getAllTypesOfWorkouts();
			res.setStatus(200);
		} catch (Exception e) {
			e.printStackTrace();
			res.setStatus(404);
		}
		return workoutTypes ;
		
	}
	
	@GetMapping("types/{id}")
	public Type typesOfWorkouts(@PathVariable int id, HttpServletResponse res){
		Type workoutTypes = typeService.getTypeOfWorkoutById(id);
		if(workoutTypes == null) {
			res.setStatus(404);
			
		} else {
			res.setStatus(200);
		}
		return workoutTypes ;
		
	}
	
	@GetMapping("types/{cardioId}/workouts")
	public List<Cardio> getWorkoutsForType(@PathVariable Integer cardioId, HttpServletResponse res){
		List<Cardio> workouts = cardioService.getAllCardioByType(cardioId);
		if (workouts == null) {
			res.setStatus(404);
		}
		res.setStatus(200);
		return workouts;
	}
	
}
