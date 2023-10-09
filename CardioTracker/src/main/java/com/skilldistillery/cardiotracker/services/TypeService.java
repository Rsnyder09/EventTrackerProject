package com.skilldistillery.cardiotracker.services;

import java.util.List;

import com.skilldistillery.cardiotracker.entities.Type;

public interface TypeService {

	List<Type> getAllTypesOfWorkouts();
	
	Type getTypeOfWorkoutById(int id);
	
	
	
	
	
}
