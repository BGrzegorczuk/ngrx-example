import {Component, Input, OnInit, Optional} from '@angular/core';
import {ControlValueAccessor, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-input-range',
  templateUrl: './input-range.component.html',
  styleUrls: ['./input-range.component.sass']
})
export class InputRangeComponent implements ControlValueAccessor, OnInit {

  @Input() form: FormGroup;
  @Input() name = '';
  @Input() label? = '';
  id: string;
  _value = '';

  get value() {
    return this._value;
  }

  set value(val) {
    this._value = val;
    this.propagateChange(this._value);
  }

  get invalid(): boolean {
    return false;
  }

  get control(): FormControl {
    return this.form.get(this.name) as FormControl;
  }

  constructor() {
  }

  ngOnInit() {
    this.id = `${this.name}_from`;
  }

  propagateChange = (_: any) => {
  };

  propagateTouched = () => {
  };

  writeValue(value: any) { // TODO: any
    console.log('writeValue', value);
  }

  registerOnChange(fn) {
    this.propagateChange = fn;
  }

  registerOnTouched(fn) {
    this.propagateTouched = fn;
  }
}
