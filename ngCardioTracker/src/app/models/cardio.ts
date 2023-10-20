export class Cardio {
  id: number;
  title: string;
  cardioDate: string;
  startTime: string;
  stopTime: string;
  distance: number;

  constructor(id: number= 0,
    title: string = '',
    cardioDate: string = '',
    startTime: string = '',
    stopTime: string = '',
    distance: number = 0){
  this.id = id;
  this.title = title;
  this.cardioDate = cardioDate;
  this.startTime = startTime;
  this.stopTime = stopTime;
  this.distance = distance;
  }


}
