package com.skilldistillery.cardiotracker.controllers;

import java.util.List;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
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

@RestController
@RequestMapping("api")
public class CardioController {

	@Autowired
	private CardioService cardioService;

	@GetMapping("workouts")
	public List<Cardio> listCardio() {
		return cardioService.getAllCardio();
	}

	@GetMapping("workouts/{id}")
	public Cardio show(@PathVariable int id, HttpServletResponse res) {
		Cardio workout = cardioService.retrieveCardio(id);
		if (workout == null) {
			res.setStatus(404);
		}
		return workout;
	}

	@PostMapping("workouts")
	public Cardio create(@RequestBody Cardio workout) {
		workout = cardioService.create(workout);
		return workout;
	}

	@PutMapping("workouts/{id}")
	public Cardio update(@PathVariable int id, @RequestBody Cardio workout, HttpServletResponse res) {
		Cardio updatedWorkout = null;
		try {
			updatedWorkout = cardioService.update(id, workout);
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
