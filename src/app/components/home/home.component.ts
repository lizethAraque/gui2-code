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
  indicate = '0';

  constructor() {}

  ngOnInit(): void {}

  add(): void{
    this.indicate = '2';
    this.state = true;
  }

  private hideOrShowPopUp(state: boolean): void {
    this.state = state;
  }

  private addUserOrDelete(userData: User): void {
    if (this.indicate === '2'){
      this.students.push(userData);
    } else if(this.indicate === '1') {
      for (let i = 0; i < this.students.length; i++) {
        if (this.students[i].code === userData.code) {
          this.students.splice(i, 1);
          return;
        }
      }
    } else if(this.indicate === '0')  {
      this.students = this.students.filter(dta => dta.code ===  userData.code);
    }
  }

  delete(): void {
    this.indicate = '1';
    this.state = true;
  }

  
  search(): void {
    this.indicate = '0';
    this.state = true;
  }

}
