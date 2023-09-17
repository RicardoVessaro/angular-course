import { Component, EventEmitter, Output } from '@angular/core';
import { timeout } from 'rxjs';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent {
  isRunning = false;
  interval: any; 
  counter = 0;

  @Output() gameCounted = new EventEmitter<number>();

  onStart() {
    this.isRunning = true;
    this.count();
  }

  count() {
    this.interval = setInterval(() => {
      this.counter++;
      this.gameCounted.emit(this.counter);
    }, 1000)    
  }

  onStop() {
    this.isRunning = false;
    clearInterval(this.interval);
  }
}
