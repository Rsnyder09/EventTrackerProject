package com.skilldistillery.cardiotracker.repositories;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.cardiotracker.entities.Cardio;

public interface CardioRepository extends JpaRepository<Cardio, Integer> {
Cardio findById(int id);

@Transactional
long deleteById(int id);
}
