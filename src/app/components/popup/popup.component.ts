import {Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
import {User} from '../../models/User';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent implements OnInit {

  dataUser = new User();
  @Input()  indicate: String;
  @Output() hide = new EventEmitter();
  @Output() user = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  hidePage(): void {
    this.hide.emit(false);
  }

  addUserOrDeleteorFilter(): void {
    this.user.emit(this.dataUser);
    this.hide.emit(false);
  }

}
