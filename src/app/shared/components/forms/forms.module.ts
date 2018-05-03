import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsComponent } from './forms.component';
import { InputComponent } from './fields/input/input.component';
import {ReactiveFormsModule} from '@angular/forms';
import { InputRangeComponent } from './fields/input-range/input-range.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [FormsComponent, InputComponent, InputRangeComponent],
  exports: [ReactiveFormsModule, InputComponent, InputRangeComponent]
})
export class FormsModule { }
