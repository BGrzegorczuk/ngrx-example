import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {NgSelectModule} from '@ng-select/ng-select';
import {FormsComponent} from './forms.component';
import {InputComponent} from './fields/input/input.component';
import {SelectComponent} from './fields/select/select.component';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgSelectModule
  ],
  declarations: [FormsComponent, InputComponent, SelectComponent],
  exports: [ReactiveFormsModule, InputComponent, SelectComponent]
})
export class FormsModule { }
