import { Component, OnInit } from '@angular/core';
import { Cardio } from 'src/app/models/cardio';
import { CardioService } from 'src/app/services/cardio.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  cardios : Cardio[] = [];
  selected: Cardio| null = null;

  constructor(private cardioService: CardioService){}


  ngOnInit(): void {
    this.loadCardio();
  }



//same type of reload function
  loadCardio(){
    this.cardioService.index().subscribe({
      next: (cardios) => {
        this.cardios = cardios;
      },
      error: (nogood) => {
        console.error('HomeComponent.loadCardio = error getting cardios');
        console.error(nogood);
      }
    });
  }


}
