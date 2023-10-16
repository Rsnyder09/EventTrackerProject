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

•   JavaScript

•   HTML




# Lessons Learned

•	Using repositories in general. At first I created my own deleteById within and was calling that from my ServiceImpl, this is what was causing my Postman to give me 500 errors. I was deleting a selected ID from the database but postman was giving me an error. 

•	Using repositories to  create methods like findById for an entity I have created

•	Using repositories default method deleteById/saveAndFlush/findById/findAll.

•	@RestContoller/ @RequestMapping/ @GetMapping/@PostMapping/ @PutMapping/ @DeleteMapping annotations

•	@PathVariable/@RequestBody use

•	Using JSONIgnore

•	While trying to get correct HTTPServletResponse codes, i found that if i enter an ID at the top of the json body in postman it seems to update the existing id. This is without having an ID listed in my http (Example: http://localhost:8086/api/workouts)

•	I would like to have unique title names but am not sure how to do so. I will continue trying to solve this since i have plenty of time but updating README.md for now. 

•   I am unable to get update to work, i keep getting a "uncaught TypeError, for my click button once i try and submit the form" I tried several different ways and would code a little and then test but nothing seemed to work. I was unable to finish the homework because of this. I would have moved on to "delete" but because the homework said don’t move on until you understand/complete what your working on I stayed on the update for a the majority of the weekend. I was unable to find an example of an update in the prior week course work and i couldn’t find a good example on google when researching HTML,JS, JSON,XHR. I also struggled trying to bring the ID that was searched into the URL. which might have been where the problem was but when searching my error or the internet it said there might be a typo somewhere so i looked for any typos i could find for a few hours and was unable to find one.  

•   building tables in js was challenging but i was able to figure it out. once i got the concept it seemed simple.



# REST API

| HTTP Verb | URI             | Request Body | Response Body | Status |
|-----------|-----------------|--------------|---------------|---------|
| GET       | `/api/workouts`            |                           | List of workouts          | 200 or 404       |
| GET       | `/api/workouts/{id}`       |                           | Single workout            | 200 or 404       |
| POST      | `/api/workouts`            | JSON of new workout       | JSON of created workout   | 201 or 400       |
| PUT       | `/api/workouts/{id}`       | JSON for updating workout | JSON of updated workout   | 200, 404, or 400 |
| DELETE    | `/api/workouts/{id}`       |                           | Delete workout by id      | 204 or 400       |
| GET       | `/api/types`               |                           | List of types             | 200 or 404       |
| GET       | `/api/types/{id}`          |                           | Single type               | 200 or 404       |
| GET       | `/api/types/{id}/workouts` |                           | Lists workouts by type id | 200 or 404       |
| GET       | `/api/levels`              |                           | List of levels            | 200 or 404       |
| GET       | `/api/levels/{id}`         |                           | Single level              | 200 or 404       |
| GET       | `/api/levels/{id}/workouts`|                           | List workouts by level id | 200 or 404       |


# JSON

```
{
        "id": 1,
        "title": "Aurora Reservoir Walk",
        "cardioDate": "2023-10-06",
        "startTime": "06:00:00",
        "stopTime": "06:30:00",
        "distance": 1,
        "enabled": true,
        "description": "Great views for a casual walk",
        "type": {
            "id": 1,
            "name": "Walk"
        },
        "difficultyLevel": {
            "id": 1,
            "name": "Minimum Effort"
        },
        "urlimage": null
    }
```