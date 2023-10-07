package com.skilldistillery.cardiotracker.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.cardiotracker.entities.Cardio;

public interface CardioRepository extends JpaRepository<Cardio, Integer> {
Cardio findById(int id);
}
