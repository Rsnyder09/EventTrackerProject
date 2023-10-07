# EventTrackerProject


# Description
'Event Tracker' is a broad term for anything that keeps track of information over time. I have decided to keep track of my fitness by logging information about my workout. I am able to list all workouts by id, get a single workout by its id, create a new workout, update and existing workout, and delete a workout from the database. 



# Technologies Used
•	MySQL

•	MySQL Workbench

•	Gradle 

•	MAMP

•	JDBC

•	Java

•	Spring Tool Suite/Eclipse 

•	Git

•	GitHub

•	Sublime

•	Spring Boot

•	JPA

•	Google

•	JSON

•	REST




# Lessons Learned

•	Using repositories in general. At first I created my own deleteById within and was calling that from my ServiceImpl, this is what was causing my Postman to give me 500 errors. I was deleting a selected ID from the database but postman was giving me an error. 

•	Using repositories to  create methods like findById for an entity I have created

•	Using repositories default method deleteById/saveAndFlush/findById/findAll.

•	@RestContoller/ @RequestMapping/ @GetMapping/@PostMapping/ @PutMapping/ @DeleteMapping annotations

•	@PathVariable/@RequestBody use

•	Using JSONIgnore



# REST API

| HTTP Verb | URI             | Request Body | Response Body | Status |
|-----------|-----------------|--------------|---------------|---------|
| GET       | `/api/workouts`    |              | List of dives | 200   |
| GET       | `/api/workouts/{id}` |              | Single dive   | 200 or 404 |
| POST      | `/api/workouts`    | JSON of new workout       | JSON of created workout | 201 or 400 |
| PUT       | `/api/workouts/{id}` | JSON for updating workout | JSON of updated workout | 200, 404, or 400 |
| DELETE    | `/api/workouts/{id}` |              | | 204, 404, or 400 |