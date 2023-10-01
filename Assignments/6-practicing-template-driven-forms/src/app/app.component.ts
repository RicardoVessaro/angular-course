import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild("f") appForm: NgForm;
  submitted = false;

  appValue = {
    email: String,
    password: String,
    level: String
  }

  onSubmit() {
    this.submitted = true;

    this.appValue = {
      email: this.appForm.value.email,
      password: this.appForm.value.password,
      level: this.appForm.value.level
    }

    console.log('Form Values: ', this.appValue);
    
    this.appForm.reset();
  }

}
