package com.skilldistillery.cardiotracker.services;

import java.util.List;

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
	public Cardio retrieveCardio() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Cardio create() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Cardio update(int cardioId, Cardio updatingCardio) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public boolean delete(int cardioId) {
		// TODO Auto-generated method stub
		return false;
	}

}
