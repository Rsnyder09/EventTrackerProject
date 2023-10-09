package com.skilldistillery.cardiotracker.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.cardiotracker.entities.Type;
import com.skilldistillery.cardiotracker.repositories.CardioRepository;
import com.skilldistillery.cardiotracker.repositories.TypeRepository;
@Service
public class TypeServiceImpl implements TypeService {
	
	@Autowired
	TypeRepository typeRepo;
	
	

	@Override
	public List<Type> getAllTypesOfWorkouts() {
		return typeRepo.findAll();
	}

	@Override
	public Type getTypeOfWorkoutById(int id) {
		Type typeOfWorkout = typeRepo.findById(id);
		if(typeOfWorkout != null) {
			return typeOfWorkout;
		} else {
		return null;
		}
	}


	

}
