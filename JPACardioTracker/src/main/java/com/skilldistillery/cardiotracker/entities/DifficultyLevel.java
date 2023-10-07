package com.skilldistillery.cardiotracker.entities;

import java.util.List;
import java.util.Objects;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name="difficulty_level")
public class DifficultyLevel {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	private String name;
	
	@JsonIgnore
	@OneToMany(mappedBy="difficultyLevel")
	private List<Cardio> workouts;

	public DifficultyLevel() {
		super();
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public List<Cardio> getWorkouts() {
		return workouts;
	}

	public void setWorkouts(List<Cardio> workouts) {
		this.workouts = workouts;
	}

	@Override
	public int hashCode() {
		return Objects.hash(id);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		DifficultyLevel other = (DifficultyLevel) obj;
		return id == other.id;
	}

	@Override
	public String toString() {
		return "DifficultyLevel [id=" + id + ", name=" + name + "]";
	}
	
	
}
