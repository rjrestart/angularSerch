import { NgModule } from '@angular/core';
import {SearchPageComponentComponent} from './search-page-component.component'
import { MatSliderModule } from '@angular/material/slider';
import {MatInputModule} from '@angular/material/input';
import { FormsModule ,ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatSelectModule } from '@angular/material/select';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';


 

@NgModule({
 declarations: [
    SearchPageComponentComponent
  ],
  imports: [
    FormsModule,
    MatSliderModule,
    MatInputModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    HttpClientModule,
    MatSelectModule,
    CommonModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatButtonModule,
  ],
  exports: [
     SearchPageComponentComponent
  ],
})

  export class SearchPageModule { }
  