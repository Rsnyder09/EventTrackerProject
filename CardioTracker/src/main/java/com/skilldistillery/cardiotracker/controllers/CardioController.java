package com.skilldistillery.cardiotracker.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
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
	public List<Cardio> listCardio(){
		return cardioService.getAllCardio();
	}

}
