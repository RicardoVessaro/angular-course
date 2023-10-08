import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  projectForm: FormGroup;
  status = ['Stable', 'Critical', 'Finished'];

  ngOnInit() {
    this.projectForm = new FormGroup({
      'name': new FormControl(null, [Validators.required /*,this.forbiddenName*/], this.forbiddenNameAsync),
      'mail': new FormControl(null, [Validators.required, Validators.email]),
      'status':new FormControl(null, Validators.required)
    })
  }

  onSubmit() {
    console.log(this.projectForm.value);
  }

  forbiddenName(control: FormControl) : {[s:string] : boolean} {
    if(control.value === 'Test') {
      return {'forbiddenName': true};
    }
    
    return null;
  }

  forbiddenNameAsync(control: FormControl): Promise<any> | Observable<any> {
    let promise = new Promise((resolve, reject) => {
      if(control.value === 'Test') {
        resolve({'forbiddenName': true});
      } else {
        resolve(null);
      }
    })

    return promise;
  }
}
