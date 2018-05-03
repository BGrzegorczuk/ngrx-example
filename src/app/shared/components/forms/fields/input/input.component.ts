import {Component, forwardRef, Input, OnInit } from '@angular/core';
import {ControlValueAccessor, FormControl, FormGroup, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.sass'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true
    }
  ]
})
export class InputComponent implements ControlValueAccessor, OnInit {

  @Input() form: FormGroup;
  @Input() name = '';
  @Input() label? = '';
  @Input() type? = '';
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

  constructor() { }

  ngOnInit() {
    this.id = `${this.name}Id`;
    this.type || (this.type = 'text');
    console.log('this', this);
    this.writeValue(this.control.value);
  }

  propagateChange: Function = (_: any) => {};

  propagateTouched: Function = () => {};

  writeValue(value: string | null) {
    console.log('writeValue', value);
    value ? this.value = value : null;
  }

  registerOnChange(fn: Function) {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: Function) {
    this.propagateTouched = fn;
  }

  onChange(event: Event) {
    this.value = (<HTMLInputElement>event.target).value;
  }

  onBlur() {
    this.propagateTouched();
  }
}
