import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cardio } from 'src/app/models/cardio';
import { CardioService } from 'src/app/services/cardio.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {
  isCollapsed: boolean = false;


  searchId: number = 0;

  constructor(private cardioService: CardioService,private activatedRoute: ActivatedRoute, private router: Router){}





  showById(id: number){
     this.router.navigateByUrl("workouts/" + id);
  }


}
