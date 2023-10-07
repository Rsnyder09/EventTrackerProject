package com.skilldistillery.cardiotracker.entities;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.Objects;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonCreator;

@Entity
public class Cardio {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	private String title;
	
	@Column(name= "cardio_date")
	private LocalDate cardioDate;
	
	@Column(name = "start_time")
	private LocalTime startTime;
	
	@Column(name = "stop_time")
	private LocalTime stopTime;
	
	private int distance;
	
	@Column(name = "url_image")
	private String URLImage;
	
	private boolean enabled;
	
	private String description;
	
	@ManyToOne
	@JoinColumn(name="type_id")
	private Type type;
	
	@ManyToOne
	@JoinColumn(name="difficulty_level_id")
	private DifficultyLevel  difficultyLevel;

	public Cardio() {
		super();
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	@Override
	public int hashCode() {
		return Objects.hash(id);
	}

	public LocalDate getCardioDate() {
		return cardioDate;
	}

	public void setCardioDate(LocalDate cardioDate) {
		this.cardioDate = cardioDate;
	}

	public LocalTime getStartTime() {
		return startTime;
	}

	public void setStartTime(LocalTime startTime) {
		this.startTime = startTime;
	}

	public LocalTime getStopTime() {
		return stopTime;
	}

	public void setStopTime(LocalTime stopTime) {
		this.stopTime = stopTime;
	}

	public int getDistance() {
		return distance;
	}

	public void setDistance(int distance) {
		this.distance = distance;
	}

	public String getURLImage() {
		return URLImage;
	}

	public void setURLImage(String uRLImage) {
		URLImage = uRLImage;
	}

	public boolean isEnabled() {
		return enabled;
	}

	public void setEnabled(boolean enabled) {
		this.enabled = enabled;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public Type getType() {
		return type;
	}

	public void setType(Type type) {
		this.type = type;
	}

	public DifficultyLevel getDifficultyLevel() {
		return difficultyLevel;
	}

	public void setDifficultyLevel(DifficultyLevel difficultyLevel) {
		this.difficultyLevel = difficultyLevel;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Cardio other = (Cardio) obj;
		return id == other.id;
	}

	@Override
	public String toString() {
		return "Cardio [id=" + id + ", title=" + title + ", cardioDate=" + cardioDate + ", startTime=" + startTime
				+ ", stopTime=" + stopTime + ", distance=" + distance + ", URLImage=" + URLImage + ", enabled="
				+ enabled + ", description=" + description + "]";
	}

	

}
