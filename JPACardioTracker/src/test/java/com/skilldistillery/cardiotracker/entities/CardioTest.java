package com.skilldistillery.cardiotracker.entities;

import static org.junit.jupiter.api.Assertions.*;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

class CardioTest {

	private static EntityManagerFactory emf;
	private EntityManager em;
	
	private Cardio cardio;
	
	@BeforeAll
	static void setUpBeforeClass() throws Exception {
		emf = Persistence.createEntityManagerFactory("JPACardioTracker");
		
	}

	@AfterAll
	static void tearDownAfterClass() throws Exception {
		emf.close();
	}

	@BeforeEach
	void setUp() throws Exception {
		em = emf.createEntityManager();
		cardio = em.find(Cardio.class, 1);
	}

	@AfterEach
	void tearDown() throws Exception {
		em.close();
		cardio = null;
	}

	@Test
	void test() {
		assertNotNull(cardio);
		assertEquals("Aurora Reservoir Run", cardio.getTitle());
	}

}
