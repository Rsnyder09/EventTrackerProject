package com.skilldistillery.cardiotracker.services;

import java.util.List;

import com.skilldistillery.cardiotracker.entities.Cardio;

public interface CardioService {
		
	List<Cardio> getAllCardio();
	
	Cardio retrieveCardio(int id);
	
	Cardio create(Cardio workout);
	
	Cardio update(int cardioId, Cardio updatingCardio);
	
	void delete(int cardioId);
	
	List<Cardio> getAllCardioByType(int id);
	
	List<Cardio> getAllCardioByDifficulty(int id);
	
}
