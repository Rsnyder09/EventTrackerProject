package com.skilldistillery.cardiotracker.services;

import java.util.List;

import com.skilldistillery.cardiotracker.entities.Cardio;

public interface CardioService {
		
	List<Cardio> getAllCardio();
	
	Cardio retrieveCardio();
	
	Cardio create();
	
	Cardio update(int cardioId, Cardio updatingCardio);
	
	boolean delete(int cardioId);
	
	
}
