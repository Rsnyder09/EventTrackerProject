package com.skilldistillery.cardiotracker.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.cardiotracker.entities.Cardio;
import com.skilldistillery.cardiotracker.repositories.CardioRepository;


@Service
public class CardioServiceImpl implements CardioService {
	
	@Autowired 
	private CardioRepository cardioRepo;

	@Override
	public List<Cardio> getAllCardio() {
		return cardioRepo.findAll();
	}

	@Override
	public Cardio retrieveCardio(int id) {
		Cardio workout = cardioRepo.findById(id);
		if (workout != null) {
			return workout;
		} else {
			
			return null;
		}
	}

	@Override
	public Cardio create(Cardio workout) {
		return cardioRepo.saveAndFlush(workout);
	}

	@Override
	public Cardio update(int cardioId, Cardio updatingCardio) {
		Cardio dbWorkout = cardioRepo.findById(cardioId);
		
		if (dbWorkout != null) {
			dbWorkout.setCardioDate(updatingCardio.getCardioDate());
			dbWorkout.setDescription(updatingCardio.getDescription());
			dbWorkout.setDifficultyLevel(updatingCardio.getDifficultyLevel());
			dbWorkout.setDistance(updatingCardio.getDistance());
			dbWorkout.setEnabled(updatingCardio.isEnabled());
			dbWorkout.setStartTime(updatingCardio.getStartTime());
			dbWorkout.setStopTime(updatingCardio.getStopTime());
			dbWorkout.setTitle(updatingCardio.getTitle());
			dbWorkout.setType(updatingCardio.getType());
			dbWorkout.setURLImage(updatingCardio.getURLImage());
			cardioRepo.saveAndFlush(dbWorkout);
		}
		
		
		return dbWorkout;
	}

	@Override
	public void delete(int cardioId) {
		cardioRepo.deleteById(cardioId);
		
	}

}
