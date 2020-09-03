import { Component, OnInit } from '@angular/core';
import {User} from '../../models/User';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  students = new Array();
  state = false;
  indicate = true;

  constructor() {}

  ngOnInit(): void {}

  add(): void{
    this.indicate = true;
    this.state = true;
  }

  private hideOrShowPopUp(state: boolean): void {
    this.state = state;
  }

  private addUserOrDelete(userData: User): void {
    if (this.indicate){
      this.students.push(userData);
    } else {
      for (let i = 0; i < this.students.length; i++) {
        if (this.students[i].code === userData.code) {
          this.students.splice(i, 1);
          return;
        }
      }
    }
  }

  delete(): void {
    this.indicate = false;
    this.state = true;
  }

}
