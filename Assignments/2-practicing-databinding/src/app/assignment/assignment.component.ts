import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css']
})
export class AssignmentComponent implements OnInit {
  username='';

  constructor() { }

  ngOnInit(): void {
  }

  isUsernameEmpty() {
    return this.username.trim().length == 0;
  }

  onAddUser() {
    this.username = '';
  }

}
