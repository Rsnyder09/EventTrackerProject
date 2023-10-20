package com.skilldistillery.cardiotracker.controllers;

import java.util.List;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.cardiotracker.entities.Cardio;
import com.skilldistillery.cardiotracker.services.CardioService;
import com.skilldistillery.cardiotracker.services.TypeService;
@CrossOrigin({"*", "http://localhost/"})
@RestController
@RequestMapping("api")
public class CardioController {

	@Autowired
	private CardioService cardioService;
	@Autowired
	private TypeService typeService;
	
	

	@GetMapping("workouts")
	public List<Cardio> listCardio(HttpServletResponse res) {
		List<Cardio> workouts = null;
		try {
			workouts = cardioService.getAllCardio();
			res.setStatus(200);
		} catch (Exception e) {
			res.setStatus(404);
			e.printStackTrace();
			
		}
		return workouts;
	}

	@GetMapping("workouts/{id}")
	public Cardio show(@PathVariable int id, HttpServletResponse res) {
		Cardio workout = cardioService.retrieveCardio(id);
		if (workout == null) {
			res.setStatus(404);
		} else {
			res.setStatus(200);
		}
		return workout;
	}

	@PostMapping("workouts")
	public Cardio create(@RequestBody Cardio workout, HttpServletResponse res) {
		try {
		workout = cardioService.create(workout);
		res.setStatus(201);
		} catch (Exception e) {
			e.printStackTrace();
			res.setStatus(400);
		}
		return workout;
	}

	@PutMapping("workouts/{id}")
	public Cardio update(@PathVariable int id, @RequestBody Cardio workout, HttpServletResponse res) {
		Cardio updatedWorkout = null;
		try {
			updatedWorkout = cardioService.update(id, workout);
				res.setStatus(200);
			if (updatedWorkout == null) {
				res.setStatus(404);
			}
		} catch (Exception e) {
			res.setStatus(400);
			e.printStackTrace();
		}
		return updatedWorkout;
	}

	@DeleteMapping("workouts/{id}")
	public void delete(@PathVariable Integer id, HttpServletResponse res) {
		try {
			cardioService.delete(id);
			res.setStatus(204);

		} catch (Exception e) {
			e.printStackTrace();
			res.setStatus(400);
		}
	}
	
	
	

}
