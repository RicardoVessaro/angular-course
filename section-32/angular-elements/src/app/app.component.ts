import { Component, Injector } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { AlertComponent } from './alert.component';
import { createCustomElement } from '@angular/elements';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, AlertComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-elements';
  content :any = null;

  constructor(injector: Injector, domSanitizer: DomSanitizer) {
    const AlertElement = createCustomElement(AlertComponent, {injector: injector});
    customElements.define('my-alert', AlertElement);

    setTimeout(() => {
      this.content = domSanitizer.bypassSecurityTrustHtml(
        "<my-alert message='Rendered dynamically'></my-alert>"
      );
    }, 1000);
  }
}
