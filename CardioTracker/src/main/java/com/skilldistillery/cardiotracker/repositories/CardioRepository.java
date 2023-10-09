package com.skilldistillery.cardiotracker.repositories;


import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.cardiotracker.entities.Cardio;

public interface CardioRepository extends JpaRepository<Cardio, Integer> {
Cardio findById(int id);

List<Cardio> findByTypeId(int id);

List<Cardio> findByDifficultyLevelId(int id);

}
