import { Pipe, PipeTransform } from '@angular/core';
import { Cardio } from '../models/cardio';

@Pipe({
  name: 'incomplete'
})
export class IncompletePipe implements PipeTransform {

  transform(workouts: Cardio[], showComplete: boolean): Cardio[] {
    if(showComplete){
      return workouts;
    }
    let results: Cardio[] = [];
    for(let workout of workouts){
      if(!workout.enabled){
        results.push(workout)
      }
    }
    return results;
  }

}
