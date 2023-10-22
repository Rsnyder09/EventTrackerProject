import { DifficultyLevel } from "./difficulty-level";
import { Type } from "./type";

export class Cardio {
  id: number;
  title: string;
  cardioDate: string;
  startTime: string;
  stopTime: string;
  distance: number;
  enabled: boolean;
  urlimage: string;
  type: Type;
  difficultyLevel: DifficultyLevel;
  description: string;

  constructor(id: number= 0,
    title: string = '',
    cardioDate: string = '',
    startTime: string = '',
    stopTime: string = '',
    distance: number = 0,
    enabled: boolean = false,
    urlimage: string = '',
    type: Type = new Type(),
    difficultyLevel: DifficultyLevel = new DifficultyLevel(),
    description: string = ''){
  this.id = id;
  this.title = title;
  this.cardioDate = cardioDate;
  this.startTime = startTime;
  this.stopTime = stopTime;
  this.distance = distance;
  this.enabled = enabled;
  this.urlimage = urlimage;
  this.type = type;
  this.difficultyLevel = difficultyLevel;
  this.description = description
  }


}
