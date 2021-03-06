import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

/**
 * @title Filter autocomplete
 */
@Component({
  selector: './app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.scss'],
})
export class AutocompleteComponent implements OnInit {
  myControl = new FormControl();
  options: string[] = ['Петя', 'Вова', 'Гриша'];
  filteredOptions!: Observable<string[]>;

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map((value) => this._filter(value))
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter((option) =>
      option.toLowerCase().includes(filterValue)
    );
  }
  inputClick = function () {
    let dropdown: any = document.getElementsByClassName('cdk-overlay-pane');
    console.dir(dropdown);
    if (dropdown) {
      let dropdownDisplay = dropdown[0].style.display;
      console.log(dropdownDisplay);
    }
  };
}
