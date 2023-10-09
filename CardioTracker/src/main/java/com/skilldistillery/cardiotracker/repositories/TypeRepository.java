package com.skilldistillery.cardiotracker.repositories;



import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.cardiotracker.entities.Type;

public interface TypeRepository extends JpaRepository<Type, Integer> {
	Type findById(int id);
}
