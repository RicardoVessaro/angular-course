import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  odds: number[] = [];
  evens: number[] = [];

  onGameCounted(count: number) {
    if(count % 2 == 0) {
      this.evens.push(count);
    } else {
      this.odds.push(count);
    }
  }
}
