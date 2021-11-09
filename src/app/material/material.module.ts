import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Material
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

const materialArray = [
  MatAutocompleteModule,
  MatFormFieldModule,
  MatSelectModule,
  MatInputModule,
];

@NgModule({
  imports: [...materialArray],

  exports: [...materialArray],
})
export class MaterialModule {}
