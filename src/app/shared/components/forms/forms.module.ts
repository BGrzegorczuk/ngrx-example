import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsComponent } from './forms.component';
import { InputComponent } from './fields/input/input.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [FormsComponent, InputComponent],
  exports: [ReactiveFormsModule, InputComponent]
})
export class FormsModule { }
