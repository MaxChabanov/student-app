import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-autocomplite',
  templateUrl: './autocomplite.component.html',
  styleUrls: ['./autocomplite.component.scss'],
})
export class AutocompliteComponent implements OnInit {
  constructor() {}

  showDropDown = false;
  toggleDropDown() {
    this.showDropDown = !this.showDropDown;
  }
  teachers: any = ['Вася', 'Петя', 'Стас', 'Валера'];

  ngOnInit(): void {}
}
