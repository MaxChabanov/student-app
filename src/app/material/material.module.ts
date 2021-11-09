import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Material
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

let materialArray = [
  MatAutocompleteModule,
  MatFormFieldModule,
  MatSelectModule,
  MatInputModule,
];

@NgModule({
  imports: [CommonModule, ...materialArray],

  exports: [...materialArray],
})
export class MaterialModule {}
