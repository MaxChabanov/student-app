import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
})
export class CalendarComponent implements OnInit {
  inputValue = '';
  inputType(event?: any) {
    this.inputValue = event.target.value;
  }
  constructor() {}

  ngOnInit(): void {}
}
