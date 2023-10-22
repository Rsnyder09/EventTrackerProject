import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { WorkoutsComponent } from './components/workouts/workouts.component';
import { AboutComponent } from './components/about/about.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { IncompletePipe } from './pipes/incomplete.pipe';
import { CardioService } from './services/cardio.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WorkoutsComponent,
    AboutComponent,
    NavigationComponent,
    NotFoundComponent,
    IncompletePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [CardioService, IncompletePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
