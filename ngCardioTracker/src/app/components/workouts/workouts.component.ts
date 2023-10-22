import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cardio } from 'src/app/models/cardio';
import { CardioService } from 'src/app/services/cardio.service';
import { IncompletePipe } from 'src/app/pipes/incomplete.pipe';

@Component({
  selector: 'app-workouts',
  templateUrl: './workouts.component.html',
  styleUrls: ['./workouts.component.css']
})
export class WorkoutsComponent implements OnInit {
selected: Cardio | null = null;
title: string = 'Workouts';
newWorkout: Cardio = new Cardio();
editWorkout: Cardio | null = null;
showComplete: boolean = false;
workouts: Cardio[] = [];
addNewWorkout: Cardio | null = null;


constructor(private cardioService: CardioService,private incompletePipe: IncompletePipe,private activatedRoute: ActivatedRoute, private router: Router){}

ngOnInit() {
  this.reload();
  this.activatedRoute.paramMap.subscribe(
    {
      next: (params) => {
        let cardioIdStr = params.get("workoutId");
        if(cardioIdStr){
          let cadioId = parseInt(cardioIdStr);
          if(isNaN(cadioId)){
            this.router.navigateByUrl("invalidId")
          } else{
            console.log(cadioId)
            this.cardioService.show(cadioId).subscribe(
              {
                next: (workout) =>{
                  this.selected = workout;
                },
                error: (nogood) =>{
                  console.error(nogood);
                  this.router.navigateByUrl('/WorkoutNotFound');
                }
              }
            );
          }
        }
        console.log(cardioIdStr);
      }
    }
  );
}


reload(): void {
  this.cardioService.index().subscribe({
    next: (workouts) => {
      this.workouts = workouts;
    },
    error: (problem) => {
      console.error('WorkoutsComponent.reload(): error loading workout: ');
      console.error(problem);
    },
  });
}

addWorkout(cardio: Cardio): void {

  this.cardioService.create(cardio).subscribe({
    next: (result) => {

      this.newWorkout = new Cardio();
      this.reload();
      this.router.navigateByUrl("/workouts")
      this.addNewWorkout = null;
    },
    error: (nojoy) => {
      console.error('WorkoutComponent.addWorkout(): error creating workout:');
      console.error(nojoy);
    },
  });
}

getWorkoutCount(): number {

  return this.incompletePipe.transform(this.workouts, false).length ;
}



displayWorkout(workout: Cardio): void {
  this.selected = workout;
}
displayAddWorkout(workout: Cardio) {
  this.addNewWorkout = workout ;
}

displayTable(): void {
  this.selected = null;
}

setEditWorkout() {
  this.editWorkout = Object.assign({}, this.selected);
}

displaAddWorkout(){
  this.selected = null;
  this.editWorkout = null;
}

updateWorkout(workout: Cardio, id: number) {
  console.log(workout);
  this.cardioService.update(workout,id).subscribe({
    next: (todos) => {
      this.selected = this.editWorkout;
      this.reload();
      this.editWorkout = null;
    },
    error: (problem) => {
      console.error('WorkoutComponent.updateWorkout(): error updating workout: ');
      console.error(problem);

    },
  });
}

deleteWorkout(id: number) {
  this.cardioService.destroy(id).subscribe({
    next: (result) => {
      this.reload();

    },
    error: (nojoy) => {
      console.error('WorkoutComponent.deleteWorkout(): error deleting workout:');
      console.error(nojoy);
    },
  });
}

}
